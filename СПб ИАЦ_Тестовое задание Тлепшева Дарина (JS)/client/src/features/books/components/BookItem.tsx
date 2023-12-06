import React from 'react';
import { Book } from '../types/Book';
import { useAppDispatch } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../redux/BookSlice';
import { selectUser } from '../../user/redux/userSlice';
import { useSelector } from 'react-redux';

function BookItem({ book }: { book: Book }): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <tr key={book?.id}>
      <td>{book?.id}</td>
      <td>{book?.title}</td>
      <td>{book?.description}</td>
      <td>{book?.pages}</td>
      <td>{book?.price}</td>
      <td>{book?.publishedAt}</td>
      <td>{book?.reference_id}</td>
      <td>{book?.hierarchy_reference_id}</td>
      <td>
        <img src={book?.image} alt="book" />
      </td>
      {user?.Role?.name === 'ROLE_EDIT' && (
        <button type="button" onClick={() => navigate(`/update/${book?.id}`)}>
          update
        </button>
      )}
      {user?.Role?.name === 'ROLE_DELETE' && (
        <button type="button" onClick={handleDelete}>
          delete
        </button>
      )}
    </tr>
  );
}

export default BookItem;
