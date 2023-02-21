import { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  static defaultProps = {
    min: 1,
    count: 1,
    max: 50,
    step: 5,
  };

  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    return (
      <div className={styles.container}>
        <button type="button" onClick={this.handlerInc} aria-label="카운트 1 증가">
          +
        </button>
        <output aria-live="polite">{count}</output>
        <button type="button" onClick={this.handlerDec} aria-label="카운트 1 감소">
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

  handlerDec = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

export default Counter;
