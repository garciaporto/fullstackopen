import { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const contactObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    const coincidence = persons.find((item) => item.name === newName);

    if (coincidence) {
      alert(`${newName} is already taken`);
      return;
    }
    setPersons(persons.concat(contactObject));
    setNewName("");
    setNewPhone("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchControl={search} onChange={handleSearch} />
      <h2>Add new</h2>
      <PersonForm onSubmit={addName} onChangeName={handleNameChange} onChangePhone={handlePhoneChange} nameControl={newName} phoneControl={newPhone} />
      <h2>Numbers</h2>
      <Persons searchParam={search} object={persons} />
    </div>
  );
};

export default App;
