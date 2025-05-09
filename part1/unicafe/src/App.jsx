import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const Statistics = ({ reviewGood, reviewBad, reviewNeutral, textGood, textBad, textNeutral }) => {
  if (reviewGood === 0 && reviewBad === 0 && reviewNeutral === 0) {
    return (
      <>
        <tr>
          <td>leave a review</td>
        </tr>
      </>
    );
  }

  let totalReviews = reviewBad + reviewGood + reviewNeutral;
  let positiveRatio = (reviewGood * 100) / totalReviews;

  return (
    <>
      <tr>
        <td>{textGood}</td>
        <td>{reviewGood}</td>
      </tr>
      <tr>
        <td>{textNeutral}</td>
        <td>{reviewNeutral}</td>
      </tr>
      <tr>
        <td>{textBad}</td>
        <td>{reviewBad}</td>
      </tr>
      <tr>
        <td>Total Reviews</td>
        <td>{totalReviews}</td>
      </tr>
      <tr>
        <td>Positive ratio</td>
        <td>{positiveRatio.toFixed(2)}%</td>
      </tr>
    </>
  );
};

const StatisticsLine = ({ total, divider }) => {
  let calculatedStats = total / divider;
  if (divider > 0) {
    if (document.querySelector("#stats")) {
      return (
        <>
          <tr>
            {" "}
            <td>Reviews stats:</td> <td> {calculatedStats.toFixed(2)}</td>{" "}
          </tr>
        </>
      );
    }
  }
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCount] = useState(0);

  const reviews = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const globalStats = (value) => {
    setCount(count + value);
  };

  const positive = () => {
    let updatedGood = good + 1;
    setGood(updatedGood);
    reviews.good = updatedGood;
    globalStats(1);
  };
  const flat = () => {
    let updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    reviews.neutral = updatedNeutral;
    globalStats(0);
  };
  const negative = () => {
    let updatedNegative = bad + 1;
    setBad(updatedNegative);
    reviews.bad = updatedNegative;
    globalStats(-1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={positive} text="Good" />
      <Button handleClick={flat} text="Neutral" />
      <Button handleClick={negative} text="Bad" />
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistics reviewGood={reviews.good} textGood="Good" reviewBad={reviews.bad} textBad="Bad" reviewNeutral={reviews.neutral} textNeutral="Neutral" />
          <StatisticsLine divider={reviews.good + reviews.neutral + reviews.bad} total={count} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
