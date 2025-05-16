const Persons = ({ object, searchParam }) => {
  return (
    <>
      {object
        .filter((x) => x.name.toLowerCase().includes(searchParam.toLowerCase()))
        .map((person) => (
          <p key={person.name}>
            {person.name} - {person.number}
          </p>
        ))}
    </>
  );
};

export default Persons;
