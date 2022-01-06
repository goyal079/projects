import React from "react";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      curr: null,
      fetched: false,
    };
  }
  async componentDidMount() {
    let b = await fetch("https://opentdb.com/api.php?amount=10").then((res) =>
      res.json()
    );
    b = b.results;
    let arr = b.map((question) => {
      let optionArr = [...question.incorrect_answers, question.correct_answer];
      optionArr = optionArr.sort(() => (Math.random() > 0.5 ? 1 : -1));
      return {
        question: question.question,
        options: optionArr,
        answer: question.correct_answer,
      };
    });
    this.setState({ questions: arr, curr: arr[0], fetched: true });
    console.log(this.state.curr);
  }
  render() {
    return (
      this.state.fetched && (
        <form>
          <legend>{this.state.curr.question}</legend>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="gridRadios1">
              {this.state.curr.options[0]}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="gridRadios2">
              {this.state.curr.options[1]}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="gridRadios3">
              {this.state.curr.options[2]}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="gridRadios3">
              {this.state.curr.options[3]}
            </label>
          </div>
        </form>
      )
    );
  }
}

export default Quiz;
