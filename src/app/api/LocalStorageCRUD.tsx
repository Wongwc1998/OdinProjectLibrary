import BookData from "@/types/Book";

const addBookLocalStorage = async (data: BookData): Promise<void> => {
  localStorage.setItem(data.id, JSON.stringify(data));

  console.log(data);
};

const getBooksLocalStorage = async (): Promise<BookData[]> => {
  let books: BookData[] = [];
  books = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")!) : [];
  return books;
};

const deleteBookLocalStorage = async (id: string): Promise<void> => {
  localStorage.removeItem(id);
};

const updateBookLocalStorage = async (id: string, data: BookData): Promise<void> => {
  localStorage.setItem(id, JSON.stringify(data));
};

export { addBookLocalStorage, getBooksLocalStorage, deleteBookLocalStorage, updateBookLocalStorage };
