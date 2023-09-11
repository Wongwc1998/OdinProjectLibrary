"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookForm from "./BookForm";
import BookData from "@/types/Book";

export function BookDialog({onNewBookAdded} : {onNewBookAdded: (newBook: BookData) => void}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add a new Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <BookForm formSubmitHandler={setOpen}  onNewBookAdded={onNewBookAdded} />
      </DialogContent>
    </Dialog>
  );
}
