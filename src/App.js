import React, { Component } from "react";
import Graph from "./Graph";
import { makePoints, stepsToPi } from "./pi";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 5000
    };
  }

  render() {
    const points = makePoints(this.state.points);
    const steps = stepsToPi(points).map(text => <li key={text}>{text}</li>);

    return (
      <div style={{ paddingTop: 10, paddingLeft: 10 }}>
        <div
          style={{
            display: "inline-block",
            maxWidth: "50%"
          }}
        >
          <Graph points={points} size={500} />
        </div>
        <div
          style={{
            textAlign: "left",
            verticalAlign: "top",
            padding: 20,
            display: "inline-block",
            maxWidth: "50%"
          }}
        >
          <ol>{steps}</ol>
        </div>
      </div>
    );
  }
}

export default App;
