"use client";

import { BarChart } from "@mui/x-charts/BarChart";
import * as React from "react";

type ExpensesChartProps = {
  className?: string;
};

export function ExpensesChart({ className }: ExpensesChartProps) {
  return (
    <BarChart
      // className={className}
      title="Expenses Chart"
      xAxis={[{ scaleType: "band", data: ["Expenses", "Income", "Profit"] }]}
      series={[
        { data: [4, 3, 5], color: "#F28E2C" },
        { data: [1, 6, 3], color: "#66B2FF" },
        { data: [2, 5, 6], color: "#24B47E" },
      ]}
      width={400}
      height={300}
    />
  );
}
