import { BookDialog } from "@/components/bookDialog";
import BookCardsArea from "@/components/BookCardsArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>This is Library</h1>
      <BookDialog />
      <BookList books={books} />
    </main>
  );
}
