import React, { Component } from 'react';
import './App.css';
import Statistics from "./components/Statistics"
import FeedbackOptions from "./components/FeedbackOptions"
import Section from "./components/Section";
import Notification from "./components/Notification"

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = (name) => {
    this.setState(state => {
      return { [name]: state[name] + 1 };
      // return { value: prevState.value + 1 }
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (total > 0 ? Math.round((good / total) * 100) : 0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave the feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {totalSum < 1 ?
            (<Notification message="No feedback given"></Notification>) :
            (<Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={totalSum}
              persentage={this.countPositiveFeedbackPercentage()} />)
          }
        </Section>

      </>
    )
  }
}


export default App;
