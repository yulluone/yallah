"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import * as React from "react";

type IncomeChartProps = {
  className?: string;
};

export function IncomeChart({ className }: IncomeChartProps) {
  return (
    <BarChart
      className="stroke-inherit"
      title="Income Chart"
      xAxis={[{ scaleType: "band", data: ["Expenses", "Income"] }]}
      series={[
        { data: [2, 3], color: "#F28E2C" },
        { data: [1, 6], color: "#66B2FF" },
        { data: [2, 5], color: "#24B47E" },
      ]}
      height={300}
    />
  );
}
