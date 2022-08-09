import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const titleTooltip = (e) => `$${e[0].formattedValue}`;
  const labelTooltip = (e) => "";
  return (
      <Bar
          className="bar"
      data={chartData}
      options={{
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            yAlign: "bottom",
            displayColors: false,
            callbacks: {
              title: titleTooltip,
              label: labelTooltip,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
