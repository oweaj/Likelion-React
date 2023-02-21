import React from "react";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const API_ENDPOINT = "https://randomuser.me/api/?results=5";

class LifeCycle extends React.Component {
  state = {
    // 로딩 중인가요? (데이터 패치 요청????)
    isLoading: false,
    // 통신 결과가 도착했나요? (데이터???)
    data: [], // null
    // 오류는 어떤 정보(상태 코드, 메시지)를 가지고 있나요?
    error: null,
    // 혹시 오류가 발생했나요?
    // hasError: false,
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div
          role="alert"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Spinner title="로딩 중..." />
        </div>
      );
    }

    return (
      <>
        <button type="button" onClick={() => this.fetchRandomPeople(API_ENDPOINT)}>
          다양한 사람들을 보고 싶어요!
        </button>
      </>
    );
  }

  /* commit 단계 ---------------------------------------------------------------- */

  // React + Firebase 클라우드 Backend (Serverless) : AWS
  // - 인증(회원가입, 로그인, SNS 로그인)
  // - 파이어스토어 (데이터베이스: JSON 데이터 구조)
  // - 스토리지 (이미지, 에셋 업로드 → URL)
  // - 호스팅 (서비스, FTP → 무료 웹 호스팅)

  async fetchRandomPeople(endpoint) {
    // Random User API 서버에 요청
    this.setState({
      isLoading: true,
    });

    const response = await fetch(endpoint);

    if (!response.ok) {
      console.error(response.status, response.statusText);
      return;
    }

    const data = await response.json();

    console.log(data);
  }

  componentDidMount() {
    // this.fetchRandomPeople(API_ENDPOINT);

    const lifecycleElement = document.querySelector(".LifeCycle");
    const selectMeInput = document.getElementById("select-me");

    if (lifecycleElement) {
      lifecycleElement.addEventListener("click", (e) => {
        e.target.style.cssText = `
        background: skyblue;
        color: darkblue;
        font-size: 3rem;
        padding: 20px;
      `;

        setTimeout(() => {
          selectMeInput.value = "오케이~";
          selectMeInput.select();
        }, 1500);
      });

      lifecycleElement.addEventListener("keyup", (e) => {
        if (e.key.toLowerCase().includes("enter")) {
          lifecycleElement.click();
        }
      });
    }
  }

  componentDidUpdate() {
    console.log("컴포넌트가 변경되었어요.");
  }
}

export default LifeCycle;
