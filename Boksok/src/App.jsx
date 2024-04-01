import React, { useState, useEffect } from 'react';
import BookList from './components/BookList'; // Pass på at stien stemmer overens med hvor du plasserte filen

function BookSearch() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("James+bond");

  useEffect(() => {
    const fetchBooks = async () => {
      const url = `https://openlibrary.org/search.json?q=${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.docs);
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <BookList books={books} searchTerm={searchTerm} />
  );
}



export default BookSearch;