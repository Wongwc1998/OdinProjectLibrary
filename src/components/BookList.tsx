"use client";
import BookItem from "./BookItem";
import { useState } from "react";
type BookProps = {
  books: {
    id: string;
    title: string;
    author: string;
    completed: boolean;
    pagesRead: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export default function BookList( props : BookProps) {
  const [books, setBooks] = useState(props.books);
  return (
    <>
      <h1 className=""> List of books:</h1>
      <div className="grid grid-cols-4 gap-10 min-w-full">
        {props.books.map((item) => (
          <BookItem
            key={item.id}
            {...item}
            />
        ))}
      </div>
    </>
  );
}
