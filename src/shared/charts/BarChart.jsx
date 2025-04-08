// src/components/BarChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import BaseChart from "./BaseChart";

// 기본 옵션 (필요에 따라 변경 가능)
const defaultOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Bar Chart" },
  },
};

const BarChart = ({ data, options = {}, ...props }) => {
  // 옵션 병합 (기본 옵션에 사용자 지정 옵션을 덮어쓰도록)
  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <BaseChart
      ChartComponent={Bar}
      data={data}
      options={mergedOptions}
      {...props}
    />
  );
};

export default BarChart;
