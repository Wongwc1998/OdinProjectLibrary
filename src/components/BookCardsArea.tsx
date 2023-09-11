import React from "react";
import BookItem from "./BookItem";

export default function BookCardsArea() {
  return (
    <div className="flex flex-row gap-10 m-10">
      <BookItem title="a" author="a" pagesRead={10} completed={true} />
      <BookItem title="a" author="a" pagesRead={10} completed={true} />
      <BookItem title="a" author="a" pagesRead={10} completed={true} />
      <BookItem title="a" author="a" pagesRead={10} completed={true} />
      <BookItem title="a" author="a" pagesRead={10} completed={true} />
    </div>
  );
}
