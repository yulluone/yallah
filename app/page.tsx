import Image from "next/image";
import { ExpensesChart } from "@/components/ui/bar-chart";

const data = [
  {
    USD: 10000,
    title: "Monthly Expenses",
    KES: 30000,
  },
  {
    title: "Annual Expenses",
    USD: 10000,
    KES: 30000,
  },
  {
    title: "Annual Income",
    USD: 10000,
    KES: 30000,
  },
  {
    title: "Annual Profits",
    USD: 10000,
    KES: 30000,
  },
];

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-7 h-screen">
      <h1 className="text-xl lg:text-3xl p-2 font-medium lg:font-bold sticky md:block md:z-10 min-h-16 md:justify-start justify-center flex items-center z-30 top-0">
        Dashboard
      </h1>

      {/* expenses & profits cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 z-10 ">
        {data.map((item, index) => (
          <div className="bg-light-200 dark:bg-dark-200 p-5 flex flex-col rounded-xl">
            <h3 className="text-sm opacity-75">{item.title}</h3>
            <div className="flex flex-col gap-2 mt-3">
              <span className="text-2xl font-medium">USD: {item.USD}</span>
              <span className="text-brand text-sm">KES: {item.KES}</span>
            </div>
          </div>
        ))}
        <div className="bg-light-200 dark:bg-dark-200 p-5 flex flex-col rounded-xl">
          <ExpensesChart className="text-current" />
        </div>
      </div>
    </div>
  );
}
