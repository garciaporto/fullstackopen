import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = (props) => (
  <>
    {props.course.map((item) => {
      {
        return (
          <div key={item.id}>
            <Header course={item.name} />
            <Content parts={item.parts} />
            <Total parts={item.parts} />
          </div>
        );
      }
    })}
  </>
);

export default Course;
