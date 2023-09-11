import { BookDialog } from "@/components/bookDialog";
import BookList from "@/components/BookList";
import { getBooks } from "@/components/testAPI";
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
