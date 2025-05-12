import Part from "./Part";

const Content = (props) => (
  <div>
    {props.parts.map((item) => (
      <Part part={item} key={item.id} />
    ))}
  </div>
);

export default Content;
