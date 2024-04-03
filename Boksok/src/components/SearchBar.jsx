import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Søk etter bøker..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Søk</button>
      </form>
    </div>
  );
}
