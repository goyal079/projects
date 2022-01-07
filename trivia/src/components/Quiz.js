import React from "react";
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      curr: null,
      fetched: false,
      responded: false,
      answer: "",
      score: 0,
      count: 0,
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
  handleAnswer = (e) => {
    this.setState({
      responded: true,
      answer: e.target.value,
    });
  };
  next = async () => {
    await this.setState((prevState) => ({
      curr: prevState.questions[prevState.count + 1],
      count: prevState.count + 1,
      responded: false,
      answer: "",
    }));
    console.log(this.state.questions);
  };
  render() {
    return (
      this.state.fetched && (
        <form
          className="border mx-auto mt-5 w-75 p-4"
          style={{ height: "300px" }}
          onChange={this.handleAnswer}
          onSubmit={this.next}
        >
          <legend>{this.state.curr.question}</legend>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value={this.state.curr.options[0]}
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
              value={this.state.curr.options[1]}
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
              value={this.state.curr.options[2]}
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
              value={this.state.curr.options[3]}
            />
            <label className="form-check-label" htmlFor="gridRadios3">
              {this.state.curr.options[3]}
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!this.state.responded}
          >
            Next
          </button>
        </form>
      )
    );
  }
}

export default Quiz;
