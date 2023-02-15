class App extends React.Component {
  // OTT (구독 === 돈!!!!)
  // 구독자 (인증, 권한)
  // 회원가입 → 로그인
  // 서비스 이용 (display: none; )

  state = {
    headline: "React Application",
    isToggle: false,
    isLoading: !true,
    hasError: null,
  };

  newHeadline = "NEW HEADLINE!! 🚀";
  currHeadline = this.state.headline;

  handleChangeHeadline = () => {
    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.currHeadline,
      });
    } else {
      this.setState({
        isToggle: true,
        headline: this.newHeadline,
      });
    }
  };

  render() {
    const { headline, isToggle } = this.state;

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩 중...</div>;
    }

    if (this.state.hasError) {
      return <div role="alert">{this.state.hasError.message}</div>;
    }

    // style 속성 객체로 입력해야함
    const hiddenStyle = { display: "none" };

    return (
      <div data-component="App">
        <h1>{headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          {isToggle ? "기존 헤드라인으로 되돌리기" : "새로운 헤드라인으로 변경"}
        </button>
      </div>
    );
  }
}

export default App;
