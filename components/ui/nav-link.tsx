import ActiveLink from "./active-link";
import { classnames } from "@/utils/classnames";

interface NavLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  sidebarIsOpen?: boolean;
}

export default function NavLink({
  href,
  icon,
  title,
  sidebarIsOpen,
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      className=" w-full  flex items-center text-sm  gap-3 rounded-lg py-2 px-4  text-dark-600 dark:text-light-600"
      activeClassName="!text-brand active-text-dark dark:active-text-light dark:text-light-400  font-medium bg-light-400 dark:bg-dark-200 "
    >
      <span
        className={classnames(
          "flex flex-shrink-0 items-center justify-start font-medium",
          sidebarIsOpen ? "w-8 xl:w-auto" : "w-auto xl:w-8 "
        )}
      >
        {icon}
      </span>
      <span
        className={classnames(
          " text-inherit "
          // sidebarIsOpen ? "inline-flex xl:hidden" : "hidden xl:inline-flex"
        )}
      >
        {title}
      </span>
    </ActiveLink>
  );
}
