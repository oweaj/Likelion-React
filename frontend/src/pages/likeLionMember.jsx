import { likeLionMembers } from "../data/likeLionMembers.js";

class LikeLionMember extends React.Component {
  state = {
    members: likeLionMembers,
  };

  changeMembers = likeLionMembers;

  labCount = this.calcLabCount(); // 그래서 뿌려질 11개의 Lab을 따로 저장

  // calcLabCount를 바로 랜더에 넣어줄 경우 11개의 lab를 뿌려주지만 1번 클릭하면 초기화됨
  calcLabCount() {
    // 데이터 분석
    // 내가 무얼을 해야 하나?
    // - 105개의 데이터를 순회해서 lab의 갯수가 몇 개인지를 확인해야 한다.
    // 그걸 하려면 어떤 로직을 짜야 하나?
    // - 배열??? 아니면 다른 데이터를??
    // 그러면 결과 값은 무엇을 내보내야 하나?
    // - 랩의 갯수

    let labSet = new Set();

    this.state.members.forEach(({ lab }) => labSet.add(lab));

    return labSet.size;
  }

  handleFilterLab = (NumberLab) => {
    this.setState({
      members: this.changeMembers.filter((v) => v.lab === NumberLab),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        {/* <button type="button" style={{ marginBottom: 10 }} onClick={() => this.handleFilterLab(5)}>
          Lab5조 모여모여
        </button>
        <button type="button" style={{ marginBottom: 10 }} onClick={() => this.handleFilterLab(11)}>
          Lab11조 모여모여
        </button> */}
        <div role="group" style={{ display: "flex", gap: 8 }}>
          {Array(this.labCount)
            .fill()
            .map((_, index /* 0, 1, 2, ..., 10 */) => {
              // (_, index에서 _ 부분은 비어있다는 의미)
              let labIndex = index + 1; // 1, 2, 3, 4, ..., 11
              return (
                <LabButton key={`lab-button-${index}`} onFilter={() => this.handleFilterLab(labIndex)}>
                  LAB {labIndex}
                </LabButton>
              );
            })}
        </div>
        <ul>
          {this.state.members.map(({ id, lab, name, gender }) => (
            <li key={id}>
              <p>
                Lab{lab} : {gender.includes("남성") ? "🙎‍♂️" : "🙍‍♀️"} {name}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

function LabButton(props /* { children, onFilter } */) {
  return (
    <button type="button" style={{ marginBottom: 20 }} onClick={props.onFilter}>
      {props.children}
    </button>
  );
}

export default LikeLionMember;
