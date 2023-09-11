import { BookDialog } from "@/components/bookDialog";
import BookList from "@/components/BookList";
import { getBooks } from "@/components/testAPI";

export default async function Home() {
  const books = await getBooks();
  return (
    <main className="flex min-h-screen flex-col items-start p-24 gap-4">
      <h1>This is Library</h1>
      <BookDialog />
      <BookList books={books} />
    </main>
  );
}
