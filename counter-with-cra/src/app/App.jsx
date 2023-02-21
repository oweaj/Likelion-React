import React from "react";
import "./App.css";
import { CounterClass, CounterFunction, LifeCycle } from "../components";
// import logo from "./assets/logo.svg";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="React" />
//         {/* <img src="./assets/logo.svg" className="App-logo" alt="React" /> 경로 적으면 안됨*/}
//         <p>
//           <code>src/App.js</code> 파일을 수정하면 <abbr title="Hot Module Replacement">HMR</abbr>, Live Reload 됩니다.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
  // 상태 변수(state variable)
  const [isVisibleComponents] = React.useState(false);

  return (
    <div className="App">
      <h2>라이프 사이클</h2>
      <LifeCycle />
      {renderComponents(isVisibleComponents)}
    </div>
  );
}

export default App;
