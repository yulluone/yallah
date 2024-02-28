import { Category, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
// import { DataTableDemo } from "@/components/ui/data-table";
import { categories } from "@/content/categories";

async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  return categories;
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="	!p-5 flex flex-col gap-7  h-screen">
      <h1 className="text-xl font-medium  ">Users</h1>

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
            type: false,
          }}
        />
      </div>
    </div>
  );
}
