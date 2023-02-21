import "./App.css";
// import logo from "./assets/logo.svg";
import { CounterClass, CounterFunction } from "../components";

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

function App() {
  return (
    <div className="App">
      <h2>함수 컴포넌트</h2>
      <CounterFunction />
      <h2>클래스 컴포넌트</h2>
      <CounterClass />
    </div>
  );
}

export default App;
