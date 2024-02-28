"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import * as React from "react";

type IncomeChartProps = {
  className?: string;
};

export function ProfitChart({ className }: IncomeChartProps) {
  return (
    <BarChart
      // className={className}
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
          fill: "rgb(36 180 126 / var(--tw-text-opacity))",
        },

        // change bottom label styles
        "& .MuiChartsAxis-bottom  .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.5",
          fill: "rgb(36 180 126 / var(--tw-text-opacity))",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: "rgb(36 180 126 / var(--tw-text-opacity))",
          strokeWidth: "0.4",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: "rgb(36 180 126 / var(--tw-text-opacity))",
          strokeWidth: "0.4",
        },
      }}
      title="Income Chart"
      xAxis={[{ scaleType: "band", data: ["Income", "Profit"] }]}
      series={[
        { data: [3, 1], color: "#F28E2C" },
        { data: [6, 5], color: "#66B2FF" },
        { data: [5, 3], color: "#24B47E" },
      ]}
      height={300}
    />
  );
}
