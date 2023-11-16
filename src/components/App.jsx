import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = (actionType) => {
    switch (actionType) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        console.error('Invalid action type');
    }
  };

 

  const countTotalFeedback = () => good + neutral + bad;
 const total = countTotalFeedback();
  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
  };

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          arrayOfOptions={['good', 'neutral', 'bad']}
          onBtnClick={onBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

  
