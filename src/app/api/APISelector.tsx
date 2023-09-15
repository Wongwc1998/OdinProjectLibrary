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

const APIType = process.env.REACT_APP_API ?? "LocalStorage"; // Assuming LocalStorage as the default

const CRUDActions = {
  Prisma: {
    add: addBookPrisma,
    get: getBooksPrisma,
    delete: deleteBookPrisma,
    update: updateBookPrisma,
  },
  LocalStorage: {
    add: addBookLocalStorage,
    get: getBooksLocalStorage,
    delete: deleteBookLocalStorage,
    update: updateBookLocalStorage,
  },
};

const addBook = async (data: BookData): Promise<void> => {
  const action = CRUDActions[APIType as keyof typeof CRUDActions]?.add;
  if (action) {
    await action(data);
  } else {
    throw new Error("Invalid API type specified or add method not found.");
  }
};

const getBooks = async (): Promise<BookData[]> => {
  const action = CRUDActions[APIType as keyof typeof CRUDActions]?.get;
  if (action) {
    return await action();
  } else {
    throw new Error("Invalid API type specified or get method not found.");
  }
};

const deleteBook = async (id: string): Promise<void> => {
  const action = CRUDActions[APIType as keyof typeof CRUDActions]?.delete;
  if (action) {
    await action(id);
  } else {
    throw new Error("Invalid API type specified or delete method not found.");
  }
};

const updateBook = async (id: string, data: BookData): Promise<void> => {
  const action = CRUDActions[APIType as keyof typeof CRUDActions]?.update;
  if (action) {
    await action(id, data);
  } else {
    throw new Error("Invalid API type specified or update method not found.");
  }
};

export { addBook, getBooks, deleteBook, updateBook };
