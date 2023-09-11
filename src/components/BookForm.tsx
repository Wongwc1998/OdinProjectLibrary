"use client";

import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React, { Dispatch, SetStateAction } from "react";
import BookData from "@/types/Book";

type BookFormProps = {
  formSubmitHandler: Dispatch<SetStateAction<boolean>>;
};

const bookFormSchema = z.object({
  title: z.string().min(1, {
    message: "Book must have a title",
  }),
  author: z.string().min(1, {
    message: "Book must have an author",
  }),
  pagesRead: z.number().min(1, {
    message: "Pages read must be a non-zero number",
  }),
  completed: z.boolean(),
});

export default function BookForm({ formSubmitHandler }: BookFormProps) {
  const form = useForm<BookData>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      title: "",
      author: "",
      pagesRead: 0,
      completed: false,
    },
  });
  function onSubmit(data: BookData) {
    formSubmitHandler(false);
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Title</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Book Title" {...field} />
              </FormControl>
              <FormDescription>The Book Title Goes here.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Author</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Book Author" {...field} />
              </FormControl>
              <FormDescription>The Book Author Goes here.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pagesRead"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book Pages Read</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  onChange={(event) => field.onChange(+event.target.value)}
                />
              </FormControl>
              <FormDescription>How many pages you have read</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="completed"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Book read</FormLabel>
                <FormDescription>Have you finished this book?</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
