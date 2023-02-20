import App from "./App.js";
import TenMillions from "./TenMillions.js";

// ES 구조 분해 할당
// 번들링 (트리 쉐이킹)
const { StrictMode } = React;
const { createRoot } = ReactDOM;

const reactDomRoot = createRoot(document.getElementById("root"));

reactDomRoot.render(
  <StrictMode>
    {/* <App /> */}
    <TenMillions />
  </StrictMode>
);
