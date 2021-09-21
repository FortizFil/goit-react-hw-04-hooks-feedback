import { useState } from 'react';
import Statistics from './components/statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/section';
import Notification from './components/notification';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButton = name => {
    switch (name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => Math.round((good / countTotalFeedback()) * 100);
  const FeedbackPercentage = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={onButton} />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={FeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
