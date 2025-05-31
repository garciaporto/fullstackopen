const Search = ({ searchControl, onChange }) => {
  return (
    <>
      <h1>Find countries</h1>
      <section className="search-section">
        <input type="text" id="searchInput" value={searchControl} onChange={onChange} />
      </section>
    </>
  );
};

export default Search;
