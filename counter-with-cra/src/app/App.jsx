import React from "react";
import styles from "./App.module.css";
import { ReactComponent as ReactLogo } from "assets/logo.svg";
import { CounterClass, CounterFunction, LifeCycle, API_ENDPOINT } from "components";

function renderComponents(isVisible) {
  if (isVisible) {
    return (
      <>
        <h2>함수 컴포넌트</h2>
        <CounterFunction />
        <h2>클래스 컴포넌트</h2>
        <CounterClass />
        <h2>버튼 컴포넌트</h2>
      </>
    );
  } else {
    return null;
  }
}

function App() {
  // 상태 관리 훅
  // 상태 변수(state variable)
  const [isVisibleComponents, updateIsVisibleComponents] = React.useState(false);

  const handleToggleVisible = () => {
    updateIsVisibleComponents(!isVisibleComponents);
  };

  return (
    <div className={styles.container}>
      <ReactLogo title="리액트 로고" />
      <button type="button" onClick={handleToggleVisible}>
        {isVisibleComponents.toString()}
      </button>
      <h2>라이프 사이클</h2>
      {isVisibleComponents && <LifeCycle />}
      {renderComponents(isVisibleComponents)}
    </div>
  );
}

export default App;
