import React from 'react';
import Bookcard from './BookCard';

export default function SearchResult({ books }) {
  return (
    <div>
      {books.map((book, index) => (
        <Bookcard
          key={index}
          keyBook={book.key}
          title={book.title}
          first_publish_year={book.first_publish_year}
          author_name={book.author_name ? book.author_name.join(', ') : 'Ukjent'}
          ratings_average={book.ratings_average ? book.ratings_average : "Ikke tilgjengelig"}
          coverImage={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://placehold.co/600x400'}
        />
      ))}
    </div>
  );
}
