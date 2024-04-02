import React, { useState, useEffect } from 'react';
import BookList from './components/BookList'; 

function BookSearch() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("James+bond");

  useEffect(() => {
    const fetchBooks = async () => {
      try{
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`);
        const data = await response.json();
        setBooks(data.docs);
      }catch{
        console.error("Det har skjedd en feil")
        setBooks([])
      }
     
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <BookList books={books} searchTerm={searchTerm} />
  );
}



export default BookSearch;