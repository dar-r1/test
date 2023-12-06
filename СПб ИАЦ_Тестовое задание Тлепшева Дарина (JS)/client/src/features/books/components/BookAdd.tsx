import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookWithoutId } from '../types/Book';
import { useAppDispatch } from '../../../store';
import { addBook } from '../redux/BookSlice';

function BookAdd(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pages, setPages] = useState(0);
  const [price, setPrice] = useState(0);
  const [simple, setSimple] = useState(0);
  const [hierarchy, setHierarchy] = useState(0);

  const handleAdd = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const book: BookWithoutId = {
      title,
      description,
      pages,
      price,
      reference_id: simple,
      hierarchy_reference_id: hierarchy,
    };
    dispatch(addBook(book));

    navigate('/');
  };

  return (
    <form onSubmit={handleAdd}>
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
      <button type="submit">add</button>
    </form>
  );
}

export default BookAdd;
