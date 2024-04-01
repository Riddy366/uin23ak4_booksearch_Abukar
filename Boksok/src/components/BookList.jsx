export default function BookList( {books, searchTerm} ){
 
    return(

    <div>
      <h2>Bøker funnet for "{searchTerm.replace(/\+/g, ' ')}"</h2>
      <ul>
      {Array.isArray(books) && books.slice(0, 10).map((book, index) => (
      <li key={index}>{book?.title} av {book.author_name?.join(', ')}</li>
      ))
}
      </ul>
    </div>


    )
}