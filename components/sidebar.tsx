import { classnames } from "@/utils/classnames";
import ActiveLink from "./ui/active-link";
import NavLink from "./ui/nav-link";
import { navLinks } from "@/content/sidebar-config";

type sidebarProps = {
  sidebarOpen: boolean;
};

export default function SideBar({ sidebarOpen }: sidebarProps) {
  return (
    <aside
      className={classnames(
        "h-full flex-col justify-between overflow-y-auto bg-light  pt-16 text-dark-900  dark:bg-dark-300",
        sidebarOpen ? "sm:w-60 xl:w-[75px]" : "sm:w-[75px] xl:w-60 "
      )}
    >
      <nav className="flex flex-col ">
        {navLinks.map((item) => {
          return <p>mm</p>;
        })}
      </nav>
    </aside>
  );
}
