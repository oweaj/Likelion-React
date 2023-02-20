import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    min: 1,
    count: 1,
    max: 10,
    step: 1,
  };

  state = {
    count: 1,
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <button type="button" aria-label="카운트 1 증가">
          +
        </button>
        <output aria-live="polite">{count}</output>
        <button type="button" aria-label="카운트 1 감소">
          -
        </button>
      </div>
    );
  }

  handlerInc = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };

  handlerDec = () => {};
}

export default Counter;
