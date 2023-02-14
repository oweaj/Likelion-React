/* React 컴포넌트 --------------------------------------------------------------- */

// 함수(형) 컴포넌트 (group 현재 랜더부분에서 주석처리 함)
function Group(props) {
  console.log(props.lang);
  console.log(props.content);

  // JSX 보간법(interpolation)
  // <element prop={value}>this is {content}</element>

  return (
    <div role="group" lang={props.lang}>
      {props.content}
    </div>
  );
}

// 클래스 컴포넌트
class Logo extends React.Component {
  // 렌더링
  render() {
    // React 엘리먼트 반환
    return <img src="/assets/react-logo.svg" alt="React" />;
  }
}

// 함수 컴포넌트
function Header() {
  return (
    <header>
      <div className="group">
        <button type="button">Btn 1</button>
        <button type="button">Btn 2</button>
      </div>
    </header>
  );
}
function Main() {
  return (
    <main>
      <p>앱 메인 정보를 입력하는 부분</p>
    </main>
  );
}
function Footer() {
  return (
    <footer>
      <p>앱 푸터 정보를 입력하는 부분</p>
    </footer>
  );
}

// 클래스 컴포넌트 (위에 함수 컴포넌트를 병합)
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(
  <React.Fragment>
    {/* <Group lang="es" content="sit amet consectetur." />
    <Group lang="ru" content="Далеко-далеко за словесными горами." /> */}
    {/* <App /> */}
  </React.Fragment>
);

// reactDomRoot.render(
//   with JSX
//   <div role="group" lang="en">
//     <Logo />
//   </div>

//   // without JSX
//   React.createElement("div", { role: "gorup", lang: "en" }, React.createElement(Logo), React.createElement(Logo), React.createElement(Logo))
// );

//
// 버튼 생성 후 클릭하면 숫자 1씩 증가 만들어보기
class Btn extends React.Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;

    return (
      <div className="container">
        <div className="numberBox">Number : {number}</div>
        <button
          type="button"
          id="plusBtn"
          onClick={() => {
            if (number < 10) {
              this.setState({
                number: number + 1,
              });
            } else {
              this.setState({
                number: 0,
              });
            }
          }}
        >
          COUNT BUTTON
        </button>
      </div>
    );
  }
}

reactDomRoot.render(<Btn />);
