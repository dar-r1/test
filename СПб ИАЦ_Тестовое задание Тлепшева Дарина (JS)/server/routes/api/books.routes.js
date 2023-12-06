const router = require('express').Router();
const { Op } = require('Sequelize');

const {
  Book,
  SimpleReference,
  HierarchicalReference,
} = require('../../db/models');

router.get('/data_list', async (req, res) => {
  const { page = 1, size = 10, sort, filter } = req.query;
  console.log([sort.split(' ')]);
  const filterObj = JSON.parse(filter);
  console.log(filterObj[1]);
  filterObj.price[Op.gte] = filterObj.price['Op.gte'];
  delete filterObj.price['Op.gte'];

  try {
    const offset = (page - 1) * size;
    const limit = parseInt(size);

    const books = await Book.findAll({
      include: [SimpleReference, HierarchicalReference],
      nest: true,
      offset,
      limit,
      order: [sort.split(' ')],
      where: filterObj,
      // where: { price: 10.99 },
    });
    const totalPages = Math.ceil(books.count / limit);
    res.json({
      totalItems: books.count,
      totalPages,
      currentPage: page,
      books,
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// router.get('/data_list', async (req, res) => {
//   try {
//     const books = await Book.findAll({
//       include: [SimpleReference, HierarchicalReference],
//       nest: true,
//     });
//     res.json(books);
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// });

router.delete('/delete_data/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const result = await Book.destroy({
      where: { id: bookId },
    });
    if (result > 0) {
      res.status(204).json({ message: 'ok' });
      return;
    }
    res.status(404).json({ message: 'книга не найдена' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/edit_data/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.update(req.body, {
      where: { id: bookId },
      returning: true,
    });
    res.json(book[1]);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/edit_data', async (req, res) => {
  try {
    console.log(req.body);
    const book = await Book.create(req.body);
    console.log(book);
    res.json({ success: true, book });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
