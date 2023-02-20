import { tenMillions } from "./data/tenMillions.js";

class TenMillions extends React.Component {
  state = {
    list: tenMillions,
  };

  randomDrinkingToday() {
    return Math.floor(Math.random() * 11);
  }

  render() {
    return (
      <div className="app">
        <h1>🔥텐 밀리언즈🔥</h1>
        <ul className="items">
          {this.state.list.map((item) => (
            <li key={item.id} className={`item ${this.randomDrinkingToday() === item.number ? "is-active" : ""}`.trim()}>
              <span>
                {item.number} : {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TenMillions;
