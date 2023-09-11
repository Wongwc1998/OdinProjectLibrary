"use server"

import { prisma } from "../app/db";
import BookData from "@/types/Book";

const addBook = async (data: BookData): Promise<void> => {
  await prisma.book.create({ data: data });
  console.log(data);
};

const getBooks = async (): Promise<BookData[]> => {
  return await prisma.book.findMany();
}

const deleteBook = async (id: string): Promise<void> => {
  await prisma.book.delete({ where: { id: id } });
}

const updateBook = async (id: string, data: BookData): Promise<void> => {
  await prisma.book.update({ where: { id: id }, data: data });
}

export { addBook, getBooks, deleteBook, updateBook };