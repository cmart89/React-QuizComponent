import React, { Component } from 'react';

class QuizEnd extends Component {
  handleReset() {
    this.props.resetClickHandler();
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a onClick={this.handleReset.bind(this)} href='/test'>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd;