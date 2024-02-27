// "use client";

// import ApexCharts from "apexcharts";
// import { useEffect } from "react";
// import dynamic from "next/dynamic";

// // const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function LineChart() {
//   const options = {
//     chart: {
//       height: "100%",
//       maxWidth: "100%",
//       type: "line",

//       dropShadow: {
//         enabled: false,
//       },
//       toolbar: {
//         show: false,
//       },
//     },
//     tooltip: {
//       enabled: true,
//       x: {
//         show: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       width: 6,
//     },
//     grid: {
//       show: true,
//       strokeDashArray: 4,
//       padding: {
//         left: 2,
//         right: 2,
//         top: -26,
//       },
//     },
//     series: [
//       {
//         name: "Expenses",
//         data: [6500, 6418, 6456, 6526, 6356, 6456],
//         color: "#1A56DB",
//       },
//       {
//         name: "Income",
//         data: [6456, 6356, 6526, 6332, 6418, 6500],
//         color: "#7E3AF2",
//       },
//     ],
//     legend: {
//       show: false,
//     },
//     // ignore eslint

//     stroke: {
//       curve: "smooth",
//     },
//     xaxis: {
//       categories: [
//         "01 Feb",
//         "02 Feb",
//         "03 Feb",
//         "04 Feb",
//         "05 Feb",
//         "06 Feb",
//         "07 Feb",
//       ],
//       labels: {
//         show: true,
//         style: {
//           fontFamily: "Inter, sans-serif",
//           cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
//         },
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       show: false,
//     },
//   };

//   let count = 0;

//   useEffect(() => {
//     if (count > 0) return;
//     console.log("rendering chart");
//     const chart = new ApexCharts(
//       document.getElementById("line-chart"),
//       options
//     );
//     chart.render();
//     count++;
//   }, []);

//   return (
//     <div className="max-w-sm w-full  bg-inherit rounded-lg shadow p-4 md:p-6">
//       <div id="line-chart" className="w-full"></div>
//     </div>
//   );
// }
