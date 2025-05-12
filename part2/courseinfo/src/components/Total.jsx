const Total = (props) => {
  let sum = props.parts.reduce((acc, item) => {
    return (acc += item.exercises);
  }, 0);
  return (
    <p>
      <b>Number of exercises {sum}</b>
    </p>
  );
};

export default Total;
