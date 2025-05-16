const Filter = ({ searchControl, onChange }) => {
  return (
    <div>
      Search: <input value={searchControl} onChange={onChange} />
    </div>
  );
};

export default Filter;
