import { useState } from "react";

const Button = ({ handleChange, text }) => {
  return <button onClick={handleChange}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <li>
      {text}: {value}
    </li>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total != 0 ? (good - bad) / total : 0;
  const positive = total != 0 ? (good / total) * 100 : 0;

  if (total <= 0) return <p>No feedback given</p>;

  return (
    <ol style={{ listStyle: "none" }}>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + neutral + bad} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive.toString() + " %"} />
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
