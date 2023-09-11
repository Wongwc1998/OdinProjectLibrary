"use client";
import { BookDialog } from "@/components/bookDialog";
import BookList from "@/components/BookList";
import { getBooks } from "@/components/testAPI";
import BookData from "@/types/Book";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState<BookData[]>([]);
  useEffect(() => {
    // Assuming you have a function fetchBooks that gets the list of books from the database
    const fetchInitialBooks = async () => {
      const initialBooks = await getBooks();
      setBooks(initialBooks);
    };

    fetchInitialBooks();
  }, []);
  const updateBooks = (newBook: BookData) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  return (
    <main className="flex min-h-screen flex-col items-start p-24 gap-4">
      <h1>This is Library</h1>
      <BookDialog  onNewBookAdded={updateBooks}  />
      <BookList books={books} />
    </main>
  );
}
