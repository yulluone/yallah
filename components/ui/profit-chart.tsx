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
