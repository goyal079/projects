import React from "react";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions,
      curr: {},
    };
  }
  componentDidMount() {
    let a = this.state.questions.map((question) => {
      let arr = [...question.incorrect_answers, question.correct_answer];
      arr = arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
      return {
        question: question.question,
        options: arr,
        correct: question.correct_answer,
      };
    });
    this.setState({ questions: a, curr: a[0] });
  }
  render() {
    return (
      <form>
        {<legend>{this.state.curr.question}</legend>}

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="gridRadios1">
            {this.state.curr.options[0]}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="option2"
          />
          <label class="form-check-label" for="gridRadios2">
            {this.state.curr.options[1]}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios3"
            value="option3"
          />
          <label class="form-check-label" for="gridRadios3">
            {this.state.curr.options[2]}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios3"
            value="option3"
          />
          <label class="form-check-label" for="gridRadios3">
            {this.state.curr.options[3]}
          </label>
        </div>
      </form>
    );
  }
}

export default Quiz;
