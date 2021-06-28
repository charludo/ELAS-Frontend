import React from "react";

import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

class App extends React.Component {
  render() {
    const data = [
      {
        data: {
            Fun: 0.7,
            Difficulty: 0.8,
            Help: 0.9,
            interest: 0.67,
            Gradings: 0.8,
        },
        meta: { color: "blue" },
      },
      {
        data: {
          Fun: 0.6,
          Difficulty: 0.85,
          Help: 0.5,
          interest: 0.6,
          Gradings: 0.7,
        },
        meta: { color: "red" },
      },
    ];

    const captions = {
      // columns
      Fun: "Fun",
      Difficulty: "comprehension",
      Help: "Support",
      interest: "Interesting",
      Gradings: "Grade/Effort",
    };

    return (
      <div>
        <RadarChart
          captions={{
            // columns
            Fun: "Fun",
            Difficulty: "comprehension",
            Help: "Support",
            interest: "Interesting",
            Gradings: "Grade/Effort",
          }}
          data={[
            // data
            {
              data: {
                Fun: 0.7,
                Difficulty: 0.8,
                Help: 0.9,
                interest: 0.67,
                Gradings: 0.8,
              },
              meta: { color: "#58FCEC" },

            
            },
          ]}
          size={400}
        />
      </div>
    );
  }
}

export default App;
