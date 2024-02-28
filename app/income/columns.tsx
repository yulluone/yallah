"use client";

import Button from "@/components/ui/button";
import { EditIcons } from "@/components/ui/icons/edit-icon";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Income = {
  id: number;
  item: string;
  category: string;
  transaction_date: Date;
  description: string;
  amount: number;
  units: string;
  total: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

export const columns: ColumnDef<Income>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="border-light-600 dark:border-dark-400  rounded-[4px]"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-light-600 dark:border-dark-400  rounded-[4px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: () => <div className="text-left">Id</div>,
  },

  {
    accessorKey: "item",
    header: ({ column }) => {
      return (
        <Button
          variant="text"
          className="text-dark-600 dark:text-light-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Item
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => <div className="text-left">Category</div>,
  },

  {
    accessorKey: "description",
    header: () => <div className="text-left">Description</div>,
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
  },
  {
    accessorKey: "units",
    header: () => <div className="text-left">Units</div>,
  },
  {
    accessorKey: "total",
    header: () => <div className="text-left">Total</div>,
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-left">Created At</div>,
  },
  {
    accessorKey: "updated_at",
    header: () => <div className="text-left">Updated At</div>,
  },

  {
    id: "action",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="text" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                toast.success("Category edited");
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                toast.success("Category deleted");
              }}
              className="!text-red-500"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
