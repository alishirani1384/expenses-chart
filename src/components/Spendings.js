import React from "react";
import { useState } from "react";
import BarChart from "./BarChart";
import chartData from "../data.json";

const Spendings = () => {
  const [data, setData] = useState({
    labels: chartData.map((dateDay) => dateDay.day),
    datasets: [
      {
        data: chartData.map((datainfo) => datainfo.amount),
        backgroundColor: ["hsl(10, 79%, 65%)"],
        borderRadius: 5,
        hoverBackgroundColor: "hsl(10, 79%, 75%)",
      },
    ],
  });
  return (
    <div className="spending">
      <section className="top">
        <h1 className="card-title">Spending - Last 7 days</h1>
        {/* Chart goes here */}
        <BarChart chartData={data} />
      </section>
      <section className="bottom">
        <div className="bottom-left">
          <p className="bottom-total">Total this month</p>
          <h1 className="total-money">$478.33</h1>
        </div>
        <div className="bottom-right">
          <h3 className="percentage">+2.4%</h3>
          <p className="text">form last month</p>
        </div>
      </section>
    </div>
  );
};

export default Spendings;
