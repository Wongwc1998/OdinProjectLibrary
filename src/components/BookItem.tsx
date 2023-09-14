import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BookData from "@/types/Book";

export default function BookItem({
  title,
  author,
  pagesRead,
  completed,
  id,
}: BookData) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title: {title}</CardTitle>
        <CardDescription>Author: {author}</CardDescription>
      </CardHeader>
      <CardContent>
        <h1>ID: {id}</h1>
        <h1>Pages Read: {pagesRead}</h1>
        <br />
        <p>Book finished?</p>
        <h1 className="font-bold"> {completed ? "Yes" : "No"}</h1>
      </CardContent>
      <CardFooter>
        <h1 className="font-bold"> {props.completed ? "Yes" : "No"}</h1>
      </CardFooter>
    </Card>
  );
}
