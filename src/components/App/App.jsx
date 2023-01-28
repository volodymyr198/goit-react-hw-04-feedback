import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import css from './App.module.css';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        const goodFeedback = this.state.good;

        return Math.round((goodFeedback / totalFeedback) * 100);
    };

    addFeedback = option => {
        this.setState(prevState => {
            return { [option]: prevState[option] + 1 };
        });
    };

    render() {
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div className={css.wrapperStat}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.addFeedback}
                    />
                </Section>
                {totalFeedback === 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Section title="Statistics">
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={totalFeedback}
                            positivePercentage={positivePercentage}
                        ></Statistics>
                    </Section>
                )}
            </div>
        );
    }
}

export default App;
