export type Book = {
  id: number;
  title?: string;
  description?: string;
  pages?: number;
  price?: number;
  publishedAt?: string;
  reference_id?: number;
  hierarchy_reference_id?: number;
  image?: string;
  blob?: Blob;
};

export type BookWithoutId = Omit<Book, 'id'>;
