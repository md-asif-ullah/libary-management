import React from "react";
import BookCard from "./BookCard";

type props = {
  title: string;
  books: Array<Book>;
  containerClassName: string;
};

const BookList = ({ title, books, containerClassName }: props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
