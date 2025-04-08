// src/components/BaseChart.jsx
import React from "react";

const BaseChart = ({ ChartComponent, data, options, ...props }) => {
  return <ChartComponent data={data} options={options} {...props} />;
};

export default BaseChart;
