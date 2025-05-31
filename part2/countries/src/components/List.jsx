import Details from "./Details";

const List = ({ list, searchParam, onClick, showDetail, countryDetail }) => {
  if (!searchParam) {
    return (
      <>
        <section className="results" id="results">
          <div className="result-item">Please type a name to seach</div>
        </section>
      </>
    );
  }

  if (list.length > 10) {
    return (
      <>
        <section className="results" id="results">
          <div className="result-item">Please narrow your seach</div>
        </section>
      </>
    );
  }

  if (showDetail) {
    if (countryDetail) {
      return <Details countryObj={countryDetail} />;
    }
    return <Details countryObj={list[0]} />;
  }

  return (
    <section className="results" id="results">
      {list.map((item) => {
        return (
          <div onClick={() => onClick(item)} key={item.cca3} className="result-item">
            {item.name.common}
          </div>
        );
      })}
    </section>
  );
};

export default List;
