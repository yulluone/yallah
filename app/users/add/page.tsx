"use client";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddUser() {
  const router = useRouter();
  function submit() {
    toast.success("User added successfully");
    setTimeout(() => {
      router.push("/users");
    });
  }
  return (
    <div className="	p-5 pt-16  flex flex-col gap-2  h-full">
      <h1 className="text-xl lg:text-3xl font-medium sticky md:block md:z-10 min-h-16 md:justify-start justify-center flex items-center z-30 top-0">
        Add Users
      </h1>
      <div className="">
        {/* add user form */}

        {/* form */}
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-full 	">
              <label htmlFor="first_name" className="text-sm">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="First Name"
                id="first_name"
                type="text"
                required
                name="last_name"
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="last_name" className="text-sm">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Last Name" required name="last_name" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-full 	">
              <label htmlFor="email" className="text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                placeholder="First Name"
                id="email"
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password" className="text-sm">
                Password <span className="text-red-500">*</span>
              </label>
              <Input type="password" placeholder="Last Name" id="password" />
            </div>
          </div>
          <div>
            <Button type="submit" className="h-9 rounded-lg !text-sm">
              Add User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
