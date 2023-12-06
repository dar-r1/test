import { Book } from "../types/Book";


type BookState = {
  books: Book[];
  error: string | undefined;
};

export default BookState;
