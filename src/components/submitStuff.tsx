import { prisma } from "../app/db";
import BookData from "@/types/Book";

export default async function submitStuff(data: BookData) {

    await prisma.book.create({data: data});
    console.log(data);
  }
