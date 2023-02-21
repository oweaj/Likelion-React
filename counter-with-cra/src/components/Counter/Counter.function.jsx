import { useState } from "react";
import styles from "./Counter.module.css";

function Counter({ min = 1, count: initialCount = 1, max = 10, step = 1 }) {
  let [count, setCount] = useState(initialCount);

  // 화살표 함수이용
  const handlerInc = () => setCount(count + step);
  const handlerDec = () => setCount(count - step);

  // function 이용
  // function handlerInc() {
  //   setCount(count + step);
  // }
  // function handlerDec() {
  //   setCount(count - step);
  // }

  return (
    // Css 모듈 활용 (styles.클래스명)
    <div className={styles.container}>
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

// static으로 함수 클래스 둘다 밖에서 선언 가능 (위에 기본값을 지정해둬서 주석처림)
// Counter.defaultProps = {
//   min: 1,
//   initialCount: 1,
//   max: 10,
//   step: 1,
// };

export default Counter;
