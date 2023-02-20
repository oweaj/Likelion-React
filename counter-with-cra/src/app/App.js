import "./App.css";
// import logo from "./assets/logo.svg";
import { Counter } from "../components";

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
      <Counter step={1} />
      <Counter step={5} max={100} min={1} count={0} />
    </div>
  );
}

export default App;
