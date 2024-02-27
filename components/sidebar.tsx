import { classnames } from "@/utils/classnames";
import ActiveLink from "./ui/active-link";
import NavLink from "./ui/nav-link";
import { navLinks } from "@/content/sidebar-config";
import { CloseIcon } from "./ui/icons/close-icon";
import Link from "next/link";
import { HomeIcon } from "./ui/icons/home-icon";
import { UserIcon } from "./ui/icons/user-icon";
import NavLinkGroup, { NavLinkGroupProps } from "./ui/nav-link-group";
import { CategoryIcon } from "./ui/icons/category-icon";
import { IncomeIcon } from "./ui/icons/income-icon";
import { ExpensesIcon } from "./ui/icons/expenses-icon";

type sidebarProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const navLinkGroups: NavLinkGroupProps[] = [
  {
    groupTitle: "Finance",
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

export default function Sidebar({ sidebarOpen, toggleSidebar }: sidebarProps) {
  return (
    <aside
      className={classnames(
        "flex-col fixed z-30 lg:relative top-0 left-0 justify-between overflow-y-auto bg-light-300 min-w-screen text-dark-900  dark:bg-dark-100 transition-transform	h-full lg:min-h-screen  lg:translate-x-0 min-w-[300px]",
        sidebarOpen ? "translate-x-0" : "translate-x-[-320px]"
      )}
    >
      <div
        className="h-16 flex px-5 justify-between items-center border-light-600 dark:border-dark-300 border-b-[0.5px]"
        onClick={toggleSidebar}
      >
        <Link href="/" className="">
          <span className="text-xl font-medium transition-all duration-200 text-dark-200 dark:text-light-200 hover:text-dark-200 dark:hover:text-light-600">
            Yala Finance
          </span>
        </Link>
        <CloseIcon className="h-4 w-4 lg:hidden" />
      </div>
      <nav className="flex flex-col py-11 px-5 gap-y-7 text-center">
        <div className="flex flex-col gap-2">
          <NavLink
            title="Dashboard"
            href="/"
            icon={<HomeIcon className="h-6 w-6 text-current stroke-[1.5px]" />}
          />

          <NavLink
            title="Users"
            href="/users"
            icon={<UserIcon className="h-6 w-6  text-current stroke-[1.5px]" />}
          />
        </div>

        <div>
          {navLinkGroups.map((group) => (
            <NavLinkGroup key={group.groupTitle} {...group} />
          ))}
        </div>
      </nav>
    </aside>
  );
}
