import { likeLionMembers } from "../data/likeLionMembers.js";

class Home extends React.Component {
  state = {
    members: likeLionMembers,
  };

  // 리 랜더링 발생하지 않는다 (state안에 는 랜더링 후 초기화 성능문제)
  changeMembers = likeLionMembers;

  handleFilterLab = (NumberLab) => {
    this.setState({
      members: this.changeMembers.filter((v) => v.lab === NumberLab),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>멋쟁이 사자처럼 프론트엔드 스쿨 4기 멤버</h2>
        <button type="button" style={{ marginBottom: 10 }} onClick={() => this.handleFilterLab(5)}>
          Lab5조 모여모여
        </button>
        <button type="button" style={{ marginBottom: 10 }} onClick={() => this.handleFilterLab(11)}>
          Lab11조 모여모여
        </button>
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

export default Home;
