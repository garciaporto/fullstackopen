import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const Statistics = ({ reviewGood, reviewBad, reviewNeutral, textGood, textBad, textNeutral, stats }) => {
  if (reviewGood === 0 && reviewBad === 0 && reviewNeutral === 0) {
    return <div>leave a review</div>;
  }

  let totalReviews = reviewBad + reviewGood + reviewNeutral;
  let positiveRatio = (reviewGood * 100) / totalReviews;

  return (
    <div>
      <p>
        {textGood}: {reviewGood}
      </p>
      <p>
        {textNeutral}: {reviewNeutral}
      </p>
      <p>
        {textBad}: {reviewBad}
      </p>
      <p>Total Reviews: {totalReviews}</p>
      <p>Positive ratio: {positiveRatio.toFixed(2)}%</p>
    </div>
  );
};

const StatisticsLine = ({ total, divider }) => {
  let calculatedStats = total / divider;
  if (divider > 0) {
    return (
      <div>
        <p>Reviews stats: {calculatedStats.toFixed(2)}</p>
      </div>
    );
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
      <Statistics reviewGood={reviews.good} textGood="Good" reviewBad={reviews.bad} textBad="Bad" reviewNeutral={reviews.neutral} textNeutral="Neutral" stats={count} />
      <StatisticsLine divider={reviews.good + reviews.neutral + reviews.bad} total={count} />
    </div>
  );
};

export default App;
