"use client";
import { BookDialog } from "@/components/bookDialog";
import BookList from "@/components/BookList";
import { getBooks } from "@/components/testAPI";
import BookData from "@/types/Book";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState<BookData[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchInitialBooks = async () => {
      const initialBooks = await getBooks();
      setBooks(initialBooks);

      setLoading(false);
    };

    fetchInitialBooks();
  }, []);
  const updateBooks = (newBook: BookData) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  return (
    <main className="flex min-h-screen flex-col items-start p-24 gap-4">
      <h1>This is Library</h1>
      <BookDialog onNewBookAdded={updateBooks} />
      {isLoading ? (
        <h1>Loading list of books...</h1>
      ) : (
        <BookList books={books} />
      )}
    </main>
  );
}
