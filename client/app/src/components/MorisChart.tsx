import React, { useEffect } from "react";
import Raphael from "raphael";
import Morris from "morris";
import "morris.js/morris.css";

const MorrisChart: React.FC = () => {
  useEffect(() => {
    window.Raphael = Raphael;
    Morris.Donut({
      element: "test",
      data: [
        { label: "a", value: 49 },
        { label: "b", value: 51 },
      ],
      colors: ["#5f76e8", "#01caf1"],
      formatter: function (value, data) {
        return value + "%";
      },
    });
  }, []);

  return <div id="test" />;
};

export default MorrisChart;
