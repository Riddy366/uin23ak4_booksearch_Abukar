export default function Bookcard({
  title,
  first_publish_year,
  author_name,
  coverImage,
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {coverImage && (
        <img
          src={coverImage}
          alt={`Cover of ${title}`}
          style={{ width: "100px", height: "150px" }}
        />
      )}
      <p>Publish Year: {first_publish_year}</p>
      <p>Author: {author_name}</p>
    </div>
  );
}
