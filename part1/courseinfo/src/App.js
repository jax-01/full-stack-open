
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part course={props.course.parts[0]} />
      <Part course={props.course.parts[1]} />
      <Part course={props.course.parts[2]} />
    </>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>{props.course.name} {props.course.exercises}</p>
    </>
  );
};

const Total = (props) => {
  
  const total = props.course.parts[0].exercises +
                props.course.parts[1].exercises +
                props.course.parts[2].exercises;

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </>
  );
};

export default App;
