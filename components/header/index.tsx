"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import InputSearch from "./input-search";
import { DeviceContext } from "@/providers/device-context";

const Header = () => {
  const deviceContext = useContext(DeviceContext);
  console.log("⭐ layer context", deviceContext);

  return (
    <header className="fixed top-0 h-[60px] w-full bg-white">
      <div className="mx-auto my-0 flex h-full max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href={{
              pathname: "/",
            }}
          >
            <Image
              src="/images/logo/hanoicoffee.png"
              alt="hanoicoffee"
              width={146}
              height={40}
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="">
            <InputSearch />
          </div>
        </div>
        <div className="f-bold text-[#bb623e]">Header component</div>
        <Link href="/onboard">login</Link>
      </div>
    </header>
  );
};
export default Header;
