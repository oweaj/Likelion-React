// 마크업을 JS + DOM API를 사용해 동적으로 랜더링 해보기(innerHTML 사용 금지)
/* <div class="container container--md">
  <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
  <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.</p>
  <ul>
    <li>React 및 ReactDOM API 활용</li>
    <li>가상(Virtual) 노드 vs. 실제(Actual) DOM 노드</li>
  </ul>
</div>; */

export function createElement(type, props, ...children) {
  const element = document.createElement(type);
  for (const [property, value] of Object.entries(props)) {
    // entries => props는 배열
    element.setAttribute(property, value);
  }

  if (children.length > 0) {
    children.forEach((child) => {
      element.append(child);
    });
  }

  return element;
}

const rootEl = document.getElementById("root");

export let state = {
  headline: "웹브라우저 환경에서 React 라이브러리 시작하기",
  description: "React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.",
  subjects: ["React 및 ReactDOM API 활용", "가상(Virtual) 노드 vs. 실제(Actual) DOM 노드"],
};

function reset() {
  rootEl.innerHTML = "";
}

export function render() {
  reset();

  const divEl = document.createElement("div");
  divEl.classList.add("container", "container--md");

  const h1El = document.createElement("h1");
  h1El.textContent = "웹브라우저 환경에서 React 라이브러리 시작하기";

  const pEl = document.createElement("p");
  pEl.textContent = "React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.";

  const ulEl = document.createElement("ul");

  state.subjects.forEach((item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    ulEl.append(liEl);
  });

  divEl.append(h1El, pEl, ulEl);
  rootEl.append(divEl);
}

export function update(newState) {
  if (typeof newState.subjects === "string") {
    let newSubject = newState.subjects;
    newState.subjects = [newSubject];
  }

  state = {
    ...state,
    ...newState,
    subjects: [...state.subjects, ...(newState.subjects ? newState.subjects : [])],
  };

  render(state);
}
