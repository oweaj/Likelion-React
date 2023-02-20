class Home extends React.Component {
  state = {
    descriptionList: {
      api: "Application Programming Interface",
      html: "Hyper Text Markup Language",
      css: "Cascading Style Sheets",
      ajax: "Asynchronous JavaScript And XML",
    },
  };

  render() {
    const { descriptionList } = this.state;

    console.log(Object.entries(descriptionList));

    return (
      <section>
        <h2>설명 목록 리스트 렌더링</h2>
        <dl>
          {/* // jsx에서 요소 1개 이상 넣으려면 묶어야함 (디자인 목적이 아닌 div로 묶으면 불필요한 div태그가 들어가서 React.Fragment로 묶는것이 좋다.) */}
          <dt>기술 용어</dt>
          <dd>용어 설명 내용</dd>
        </dl>
      </section>
    );
  }
}

export default Home;
