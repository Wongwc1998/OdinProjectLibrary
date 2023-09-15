import BookData from "@/types/Book";
import { v4 as uuidv4 } from "uuid";

const BOOKS_KEY = "books"; // Use a constant for the key to avoid mistakes

const setItem = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
const getItem = <T = any,>(key: string): T | null => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

const addBookLocalStorage = async (data: BookData): Promise<void> => {
  data.id = uuidv4();
  if (!data.id) {
    throw new Error("Book ID is undefined.");
  }

  const currentBooks = getItem<BookData[]>(BOOKS_KEY) ?? [];
  currentBooks.push(data); // Add the new book to the existing list
  setItem(BOOKS_KEY, currentBooks); // Store the updated list
  console.log(data);
};

const getBooksLocalStorage = async (): Promise<BookData[]> => {
  return getItem<BookData[]>(BOOKS_KEY) ?? [];
};

const deleteBookLocalStorage = async (id: string): Promise<void> => {
  localStorage.removeItem(id);
};

const updateBookLocalStorage = async (
  id: string,
  data: BookData
): Promise<void> => {
  setItem(id, data);
  console.log(id, data);
};

export {
  addBookLocalStorage,
  getBooksLocalStorage,
  deleteBookLocalStorage,
  updateBookLocalStorage,
};
