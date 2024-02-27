import Hamburger from "./ui/icons/hamburger";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import { usePathname } from "next/navigation";
import ProfileMenu from "./ui/profile-menu";
import Link from "next/link";

interface HeaderProps {
  sidebarIsOpen: boolean;
  sidebarToggle: () => void;
}

export default function Header({ sidebarIsOpen, sidebarToggle }: HeaderProps) {
  const pathname = usePathname();

  return (
    <div className="app-header sticky left-0 top-0 z-30 flex h-16   w-full items-center justify-between bg-light-100 px-4 py-1  dark:bg-dark-100 sm:h-[70px] sm:px-6">
      <div className="flex items-center gap-4">
        {/* <Hamburger
          className="hidden sm:flex"
          onClick={() => sidebarToggle()}
          sidebarIsOpen={sidebarIsOpen}
        /> */}

        <Link href="/">
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
