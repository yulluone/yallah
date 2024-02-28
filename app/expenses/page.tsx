import { Income, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
// import { DataTableDemo } from "@/components/ui/data-table";
import { incomes } from "@/content/income";

async function getData(): Promise<Income[]> {
  // Fetch data from your API here.
  return incomes;
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="	!p-5  flex flex-col gap-2 min-h-screen">
      <h1 className="text-xl lg:text-3xl p-2 font-medium lg:font-bold sticky md:block md:z-10 min-h-16 md:justify-start justify-center flex items-center z-30 top-0">
        Expenses
      </h1>

      <div className="flex-1">
        <DataTable
          columns={columns}
          data={data}
          filterBy="email"
          key="users-table"
          columnVis={{
            id: false,
            created_at: false,
            updated_at: false,
            description: false,
            type: false,
          }}
        />
      </div>
    </div>
  );
}
