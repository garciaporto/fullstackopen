const PersonForm = ({ onSubmit, nameControl, phoneControl, onChangeName, onChangePhone }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            name: <input value={nameControl} onChange={onChangeName} />
          </div>
          <div>
            phone: <input value={phoneControl} onChange={onChangePhone} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
