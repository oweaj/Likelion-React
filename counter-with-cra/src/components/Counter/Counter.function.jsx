import React from "react";

function Counter(props) {
  let [count, setCount] = React.useState(props.count);

  function handlerInc() {
    console.log("업");
    setCount(count + props.step);
  }
  function handlerDec() {
    console.log("다운");
    setCount(count - props.step);
  }

  return (
    <div className="counter">
      <button type="button" onClick={handlerInc} aria-label="카운트 1 증가">
        +
      </button>
      <output aria-live="polite">{count}</output>
      <button type="button" onClick={handlerDec} aria-label="카운트 1 감소">
        -
      </button>
    </div>
  );
}

// static으로 함수 클래스 둘다 밖에서 선언 가능
Counter.defaultProps = {
  min: 1,
  count: 20,
  max: 10,
  step: 1,
};

export default Counter;
