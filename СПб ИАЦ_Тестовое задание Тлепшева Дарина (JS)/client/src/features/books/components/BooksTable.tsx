import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAppDispatch } from '../../../store';
import { loadBooks, selectBooks } from '../redux/BookSlice';
import { selectUser } from '../../user/redux/userSlice';
import BookAdd from './BookAdd';


const BooksTable = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const books = useSelector(selectBooks);
  const user = useSelector(selectUser);
  console.log(books);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    {
      field: 'pages',
      headerName: 'Pages',
      type: 'number',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'publishedAt',
      headerName: 'Published At',
      type: 'Date',
      width: 90,
    },
    {
      field: 'reference_id',
      headerName: 'Simple Ref',
      type: 'number',
      width: 90,
    },
    {
      field: 'hierarchy_reference_id',
      headerName: 'Tree Ref',
      type: 'number',
      width: 90,
    },
    {
      field: 'image',
      headerName: 'Image',
      type: 'string',
      width: 90,
    },
  ];

  return (
    <div style={{ margin: '80px' }}>
      {user?.Role?.name === 'ROLE_EDIT' && <BookAdd />}
      <h1 style={{ textAlign: 'center' }}>Books Table</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={books}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
        {/* <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Pages</th>
              <th>Price</th>
              <th>Published At</th>
              <th>Simple Ref</th>
              <th>Tree Ref</th>
              <th>Image</th>
            </tr>
          </thead> */}
        {/* <tbody>
            {books.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </tbody> */}
      </div>
    </div>
  );
};

export default BooksTable;
