import React, { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import css from './App.module.css';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => good + neutral + bad;

    const totalFeedback = countTotalFeedback();

    const countPositiveFeedbackPercentage = () =>
        Math.round((good / totalFeedback) * 100);
    const positivePercentage = countPositiveFeedbackPercentage();

    const addFeedback = option => {
        switch (option) {
            case 'good':
                setGood(good + 1);
                break;

            case 'neutral':
                setNeutral(neutral + 1);
                break;

            case 'bad':
                setBad(bad + 1);
                break;

            default:
                break;
        }
    };

    return (
        <div className={css.wrapperStat}>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys({ good, neutral, bad })}
                    onLeaveFeedback={addFeedback}
                />
            </Section>
            {totalFeedback === 0 ? (
                <Notification message="There is no feedback" />
            ) : (
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedback}
                        positivePercentage={positivePercentage}
                    ></Statistics>
                </Section>
            )}
        </div>
    );
};

export default App;
