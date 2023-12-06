import { Book, BookWithoutId } from '../types/Book';

export async function requestBooks(): Promise<Book[]> {
  const queryParams = new URLSearchParams({
    // page: '1',
    // size: '10',
    sort: 'title ASC',
    filter: '{"price": {"Op.gte" : 30.99}}',
  }).toString();

  const res = await fetch(`/api/data_list?${queryParams}`);
  // const res = await fetch(`/api/data_list`);
  const data = await res.json();

  return data.books;
}

export async function bookDelete(bookId: number): Promise<number> {
  await fetch(`/api/delete_data/${bookId}`, {
    method: 'DELETE',
  });
  return bookId;
}

export async function bookUpdate(book: Book): Promise<Book> {
  const res = await fetch(`/api/edit_data/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const data = await res.json();

  return data;
}

export async function bookAdd(book: BookWithoutId): Promise<Book> {
  const res = await fetch(`/api/edit_data/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const data = await res.json();
  console.log(data);

  return data.book;
}
