"use server";

import { prisma } from "../db";
import BookData from "@/types/Book";

const addBookPrisma = async (data: BookData): Promise<void> => {
  await prisma.book.create({ data: data });
};

const getBooksPrisma = async (): Promise<BookData[]> => {
  return await prisma.book.findMany();
};

const deleteBookPrisma = async (id: string): Promise<void> => {
  await prisma.book.delete({ where: { id: id } });
};

const updateBookPrisma = async (id: string, data: BookData): Promise<void> => {
  await prisma.book.update({ where: { id: id }, data: data });
};

export { addBookPrisma, getBooksPrisma, deleteBookPrisma, updateBookPrisma };
