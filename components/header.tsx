import Hamburger from "./ui/icons/hamburger";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import { usePathname } from "next/navigation";
import ProfileMenu from "./ui/profile-menu";
import Link from "next/link";
import { classnames } from "@/utils/classnames";

interface HeaderProps {
  sidebarOpen: boolean;
  sidebarToggle: () => void;
}

export default function Header({ sidebarOpen, sidebarToggle }: HeaderProps) {
  const pathname = usePathname();

  return (
    <div
      className={classnames(
        "app-header lg:fixed left-0 top-0 flex h-16 w-full items-center justify-between bg-light-300 px-4 py-1  dark:bg-dark-100 border-light-600 dark:border-dark-300 border-b-[0.5px]"
      )}
    >
      <div className="flex items-center gap-4">
        <div className="block lg:hidden">
          <Hamburger
            className=""
            onClick={() => sidebarToggle()}
            sidebarIsOpen={sidebarOpen}
          />
        </div>
        <Link href="/" className="hidden lg:block">
          <span className="text-xl font-medium transition-all duration-200 text-dark-200 dark:text-light-200 hover:text-dark-200 dark:hover:text-light-600">
            Yala Finance
          </span>
        </Link>
      </div>

      <div className="relative flex items-center gap-5 pr-0.5 xs:gap-6 sm:gap-7">
        <ThemeSwitcher />

        <ProfileMenu />
      </div>
    </div>
  );
}
