import React, { useMemo, useState } from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import { Book } from '../types/Book';
import { useSelector } from 'react-redux';
import { selectBooks, updateBook } from '../redux/BookSlice';
import { useAppDispatch } from '../../../store';

function UpdatePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const books = useSelector(selectBooks);

  const book = useMemo((): Book | undefined => {
    return books.find((book) => book.id === Number(id));
  }, [id, books]);

  const [title, setTitle] = useState(book?.title);
  const [description, setDescription] = useState(book?.description);
  const [pages, setPages] = useState(book?.pages);
  const [price, setPrice] = useState(book?.price);
  const [simple, setSimple] = useState(book?.reference_id);
  const [hierarchy, setHierarchy] = useState(book?.hierarchy_reference_id);

  const handleUpdate = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (book) {
      const book: Book = {
        id: Number(id),
        title,
        description,
        pages,
        price,
        reference_id: simple,
        hierarchy_reference_id: hierarchy,
      };

      await dispatch(updateBook(book));

      navigate('/');
    }
  };

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={pages}
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <input
          type="text"
          value={simple}
          onChange={(e) => setSimple(parseInt(e.target.value))}
        />
        <input
          type="text"
          value={hierarchy}
          onChange={(e) => setHierarchy(parseInt(e.target.value))}
        />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default UpdatePage;
