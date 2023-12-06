const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Role, UserRole } = require('../../db/models');

router.post('/register', async (req, res) => {
  const { fullname, login, password } = req.body;
  if (fullname === '' || login === '' || password === '') {
    res.status(404).json({ success: false, message: 'Заполните все поля' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ fullname, login, password: hash });

    req.session.userId = user.id;

    res.locals.user = user;

    res.json({ success: true, user: { fullname } });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await User.findOne({
      where: { login },
    });
    const userRole = await UserRole.findOne({
      where: { userId: user.id },
      include: [{ model: User }, { model: Role }],
    });
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Пользователь не зарегистрирован',
      });
      return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      res.status(404).json({
        success: false,
        message: 'Неправильный пароль',
      });
      return;
    }

    req.session.userId = user.id;

    res.locals.user = user;

    res.json({ success: true, user: userRole });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/check', (req, res) => {
  try {
    if (req.session.userId) {
      const { user } = res.locals;

      res.json({ success: true, user });
    } else {
      res.json({ success: true, user: undefined });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid');
    return res.json({ message: 'Удалена сессия' });
  });
});

module.exports = router;
