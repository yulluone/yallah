import { CategoryIcon } from "@/components/ui/icons/category-icon";
import { ExpensesIcon } from "@/components/ui/icons/expenses-icon";
import { HomeIcon } from "@/components/ui/icons/home-icon";
import { IncomeIcon } from "@/components/ui/icons/income-icon";
import { UserIcon } from "@/components/ui/icons/user-icon";

interface SingleNavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface NavItemGroup {
  title: string;
  children: NavItem[];
}

// type NavItemBase = {
//   title: string;
// };

// type NavItemWithLink = NavItemBase & {
//   href: string;
//   icon: React.ReactNode;
// };

// type NavItem = NavItemWithLink | { children: NavItem[] };

type NavItem = SingleNavItem | NavItemGroup;

export const navLinks: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <HomeIcon className="h-[18px] w-[18px] text-current" />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <UserIcon className="h-[18px] w-[18px] text-current" />,
  },

  {
    title: "Finance",
    children: [
      {
        title: "Categories",
        href: "/categories",
        icon: <CategoryIcon className="h-[18px] w-[18px] text-current" />,
      },
      {
        title: "Income",
        href: "/income",
        icon: <IncomeIcon className="h-[18px] w-[18px] text-current" />,
      },
      {
        title: "Expenses",
        href: "/expenses",
        icon: <ExpensesIcon className="h-[18px] w-[18px] text-current" />,
      },
    ],
  },
];
