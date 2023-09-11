"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BookData from "@/types/Book";

export default function BookItem(props: BookData) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title: {props.title}</CardTitle>
        <CardDescription>Author: {props.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <h1>Pages Read: {props.pagesRead}</h1>
        <br />
        <p>Book finished?</p>
      </CardContent>
      <CardFooter>
        <h1 className="font-bold"> {props.completed ? "Yes" : "No"}</h1>
      </CardFooter>
    </Card>
  );
}
