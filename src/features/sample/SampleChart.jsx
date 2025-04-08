// src/App.jsx
import React from "react";
import { BarChart } from "@/shared/charts";

const sampleBarData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81],
      backgroundColor: "rgba(75,192,192,0.4)",
    },
  ],
};

const SampleChart = () => {

  return (
    <>
        <BarChart data={sampleBarData} />
    </>
  );
}

export default SampleChart;