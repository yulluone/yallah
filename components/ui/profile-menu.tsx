"use	client";

import Image from "next/image";
import { ProfileDropDown } from "./profile-dropdown";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Transition } from "@/components/ui/transition";
import ActiveLink from "./active-link";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/atoms";
import { UserIcon } from "./icons/user-icon";
import Button from "./button";

const AuthorizedMenuItems = [
  {
    label: "Profile",
    href: "/user/profile",
  },
  {
    label: "Orders",
    href: "/user/orders",
  },
];

function AuthorizedMenu({ user }: any) {
  return (
    <ProfileDropDown>
      <ProfileDropDown.Button className="relative inline-flex justify-center ">
        <Button variant="icon">
          <UserIcon className="h-5 w-5" />
        </Button>
      </ProfileDropDown.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ProfileDropDown.Items className="absolute top-[84%] z-30 mt-4 w-56 rounded-md bg-light py-1.5 text-dark shadow-dropdown right-0 origin-top-right  dark:bg-dark-250 dark:text-light">
          {AuthorizedMenuItems.map((item) => (
            <ProfileDropDown.Item key={item.href}>
              <ActiveLink
                href={item.href}
                className="transition-fill-colors flex w-full items-center px-5 py-2.5 hover:bg-light-400 dark:hover:bg-dark-600"
              >
                {item.label}
              </ActiveLink>
            </ProfileDropDown.Item>
          ))}

          <ProfileDropDown.Item>
            <button
              type="button"
              className="transition-fill-colors w-full px-5 py-2.5 hover:bg-light-400 text-left  dark:hover:bg-dark-600"
            >
              Sign Out
            </button>
          </ProfileDropDown.Item>
        </ProfileDropDown.Items>
      </Transition>
    </ProfileDropDown>
  );
}

export default function ProfileMenu() {
  const user = useRecoilValue(userState);

  //create a menu depending on user auth status
  return (
    //if user is logged in
    <AuthorizedMenu user={user} />
  );
}
