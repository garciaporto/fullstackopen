import { useState, useEffect } from "react";
import numberService from "./services/registration";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    numberService.getAll().then((list) => setPersons(list));
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
      number: newPhone,
    };

    const coincidence = persons.find((item) => item.name === newName);

    if (coincidence) {
      const overWrite = window.confirm(`${newName} is already added to the phonebook. Do you want to replace the current number?`);

      if (overWrite) {
        const updatedContact = { ...coincidence, number: contactObject.number };

        numberService
          .update(updatedContact.id, updatedContact)
          .then((updtedPerson) => {
            setPersons(persons.map((person) => (person.id !== updatedContact.id ? person : updtedPerson)));
            setNewName("");
            setNewPhone("");
            setSearch("");
          })
          .catch(() => {
            alert(`The contact was already deleted from the server`);
            setPersons(persons.filter((person) => person.id !== updatedContact.id));
          });
      }

      return;
    }

    numberService.create(contactObject).then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
    setNewName("");
    setNewPhone("");
  };

  const removeName = (id) => {
    const nameToRemove = persons.find((personId) => personId.id === id);
    const deleteConfirmation = window.confirm(`Delete ${nameToRemove.name}?`);

    if (deleteConfirmation) {
      numberService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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
      <Persons searchParam={search} object={persons} handleDelete={removeName} />
    </div>
  );
};

export default App;
