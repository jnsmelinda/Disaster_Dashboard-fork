import React from "react";
import { Chart } from "react-google-charts";

function CovidChart(props) {
  const options = {
    title: "Most Recent Reports of New COVID-19 Cases and Deaths",
    hAxis: { title: "Date", viewWindow: { min:0 } },
    vAxis: { title: "Most Recent New Total", viewWindow: { min:0 } },
    legend: "none"
  };
  const data = [
    ["Date", "Most Recent New Total"],
    ["New Cases", parseInt(props.newCases)],
    ["New Deaths", parseInt(props.newDeaths)]
  ];


  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width="100%"
      height="500px"
      legendToggle
    />
  );
};

export default CovidChart;
