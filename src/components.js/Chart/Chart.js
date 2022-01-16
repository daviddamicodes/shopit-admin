import React from "react";
import "./Chart.scss";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ title, data, dataKey }) => {
  console.log("title:", title, "data:", data, "datakey:", dataKey);
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
