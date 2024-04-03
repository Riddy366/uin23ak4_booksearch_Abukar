import React, { useState, useEffect } from 'react';
import BookList from './components/BookList'; 
import SearchBar from './components/SearchBar';

function BookSearch() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("James+bond"); // Default 

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
     // https://covers.openlibrary.org/b/isbn/0385472579-S.jpg bilde for bøkene
    };

    fetchBooks();
  }, [searchTerm]);

  return (
    <>
    <BookList books={books} searchTerm={searchTerm}  />
    </>
    
  );
}



export default BookSearch;