import React from "react";

import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

export default function RChart(props) {
    const courseData = {
        fairness: parseInt(props.fairness)/5 || 0,
        support: parseInt(props.support)/5 || 0,
        material: parseInt(props.material)/5 || 0,
        comprehensibility: parseInt(props.comprehensibility)/5 || 0,
        fun: parseInt(props.fun)/5 || 0,
        interesting: parseInt(props.interesting)/5 || 0,
        gradefort: parseInt(props.gradefort)/5 || 0
    }
    const data = [
      {
        data: {
            fairness: 4.05/5,
            support: 3.91/5,
            material: 3.77/5,
            comprehensibility: 4.02/5,
            fun: 3.67/5,
            interesting: 3.83/5,
            gradefort: 4.07/5
        },
        meta: { color: "#C0C0C0" },
      },
      {
        data: courseData,
        meta: { color: "#F2994A" },
      },
    ];

    const captions = {
      // columns
      fairness: "Fairness",
      support: "Support",
      material: "Material",
      comprehensibility: "Conprehensibility",
      fun: "Fun",
      interesting: "Interesting",
      gradefort: "Grade/Effort",
    };

    return (
      <div>
        <RadarChart
          captions={captions}
          data={data}
          size={300}
        />
      </div>
    );
}
