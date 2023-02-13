// 마크업을 JS + DOM API를 사용해 동적으로 랜더링 해보기(innerHTML 사용 금지)
/* <div class="container container--md">
  <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
  <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.</p>
  <ul>
    <li>React 및 ReactDOM API 활용</li>
    <li>가상(Virtual) 노드 vs. 실제(Actual) DOM 노드</li>
  </ul>
</div>; */

function render() {
  const rootEl = document.querySelector("#root");

  const divEl = document.createElement("div");
  divEl.classList.add("container", "container--md");

  const h1El = document.createElement("h1");
  h1El.textContent = "웹브라우저 환경에서 React 라이브러리 시작하기";

  const pEl = document.createElement("p");
  pEl.textContent = "React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.";

  const ulEl = document.createElement("ul");

  const listItemText = ["React 및 ReactDOM API 활용", "가상(Virtual) 노드 vs. 실제(Actual) DOM 노드"];
  console.log(listItemText);

  listItemText.forEach((item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    ulEl.append(liEl);
  });

  divEl.append(h1El);
  divEl.append(pEl);
  divEl.append(ulEl);
  rootEl.append(divEl);
}

render();
