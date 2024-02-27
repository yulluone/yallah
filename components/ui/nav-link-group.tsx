import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";

interface SingleNavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export type NavLinkGroupProps = {
  groupTitle: string;
  children: SingleNavItem[];
};

export default function NavLinkGroup(navGroup: NavLinkGroupProps) {
  const pathname = usePathname();

  function defaultValue(): string | undefined {

    return navGroup.children.find((navItem) => navItem.href === pathname) && navGroup.groupTitle;
  }
  return (
    <div className="  text-dark-600 dark:text-light-600">
      <Accordion type="single" collapsible defaultValue={defaultValue()}>
        <AccordionItem value={navGroup.groupTitle}>
          <AccordionTrigger className="text-sm  ">
            {navGroup.groupTitle}
          </AccordionTrigger>
          <AccordionContent>
            {navGroup.children.map((navItem, index) => (
              <NavLink key={index} {...navItem} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
