import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleChange}>{props.text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  const average = total != 0 ? (good - bad) / total : 0;
  const positive = total != 0 ? (good / total) * 100 : 0;

  return (
    <ol style={{ listStyle: "none" }}>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>good {bad}</li>
      <li>all {good + neutral + bad}</li>
      <li>average: {average}</li>
      <li>positive: {positive} %</li>
    </ol>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleChange={increaseGood} />
      <Button text="Neutral" handleChange={increaseNeutral} />
      <Button text="Bad" handleChange={increaseBad} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
