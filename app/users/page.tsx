import { User, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
// import { DataTableDemo } from "@/components/ui/data-table";
import { users } from "@/content/users";
import AddUser from "@/components/ui/add-user";
import Link from "next/link";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return users;
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="	p-5 pt-16  flex flex-col gap-2  min-h-screen">
      <div className="flex p-2 justify-between flex-wrap items-center">
        <h1 className="text-xl lg:text-3xl  font-medium lg:font-bold sticky md:block md:z-10 min-h-16 md:justify-start justify-center flex items-center z-30 top-0">
          Users
        </h1>

        <Link href="/users/add">
          <AddUser />
        </Link>
      </div>

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
