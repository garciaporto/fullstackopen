const Persons = ({ object, searchParam, handleDelete }) => {
  const filteredList = object.filter((person) => person.name.toLowerCase().includes(searchParam.toLowerCase()));

  return (
    <>
      {filteredList.map((person) => (
        <p key={person.id}>
          {person.name} - {person.number}
          <button
            onClick={() => {
              handleDelete(person.id);
            }}>
            Delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Persons;
