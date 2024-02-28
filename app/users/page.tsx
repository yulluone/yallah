import { User, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
// import { DataTableDemo } from "@/components/ui/data-table";
import { users } from "@/content/users";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return users;
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="	!p-5  flex flex-col gap-2  min-h-screen">
      <h1 className="text-xl lg:text-3xl p-2 font-medium lg:font-bold sticky md:block md:z-10 min-h-16 md:justify-start justify-center flex items-center z-30 top-0">
        Users
      </h1>

      <div className="flex-1">
        <DataTable
          columns={columns}
          data={data}
          filterBy="email"
          key="users-table"
          columnVis={{
            id: false,
            verified_at: false,
          }}
        />
      </div>
    </div>
  );
}
