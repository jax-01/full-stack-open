import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  
  return (
    <>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(good - bad) / all} />
      <StatisticLine text="positive" value={(good / all) * 100} />  
    </>
  );
};

const StatisticLine = ({text, value}) => {

  if (text === "positive") {
    return (
      <table>
        <tbody>
          <tr>
            <td>{text} {value} %</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>{text} {value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;