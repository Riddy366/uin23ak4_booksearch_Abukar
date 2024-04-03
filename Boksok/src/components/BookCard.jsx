export default function BookCard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage}) {

    return (
    <>
   
        <article className="book-Card" key={keyBook}>
        <h3>{title}</h3>
        <p>Publish Year: {first_publish_year}</p>
        <p>Author: {author_name}</p>
        <p>Average rating: {ratings_average}</p>
        <img src={`https://covers.openlibrary.org/b/isbn/${coverImage}-S.jpg`} style={{width: "100px", height: "100px"}} alt={title}/>
        </article>

    </>
    )
}