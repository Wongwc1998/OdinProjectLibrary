import {
  addBookPrisma,
  getBooksPrisma,
  deleteBookPrisma,
  updateBookPrisma,
} from "./PrismaCRUD";
import {
  addBookLocalStorage,
  getBooksLocalStorage,
  deleteBookLocalStorage,
  updateBookLocalStorage,
} from "./LocalStorageCRUD";

import BookData from "@/types/Book";

const addBook = async (data: BookData): Promise<void> => {
  if (process.env.REACT_APP_API === "Prisma") {
    await addBookPrisma(data);
  } else if (process.env.REACT_APP_API === "LocalStorage") {
    await addBookLocalStorage(data);
  }
};

const getBooks = async (): Promise<BookData[] | undefined> => {
  try {
    if (process.env.REACT_APP_API === "Prisma") {
      return await getBooksPrisma();
    } else if (process.env.REACT_APP_API === "LocalStorage") {
      return await getBooksLocalStorage();
    }
  } catch {
      console.log("Error getting books");
      return [];
  }
};

const deleteBook = async (id: string): Promise<void> => {
  if (process.env.REACT_APP_API === "Prisma") {
    await deleteBookPrisma(id);
  } else if (process.env.REACT_APP_API === "LocalStorage") {
    await deleteBookLocalStorage(id);
  }
};

const updateBook = async (id: string, data: BookData): Promise<void> => {
  if (process.env.REACT_APP_API === "Prisma") {
    await updateBookPrisma(id, data);
  } else if (process.env.REACT_APP_API === "LocalStorage") {
    await updateBookLocalStorage(id, data);
  }
};
