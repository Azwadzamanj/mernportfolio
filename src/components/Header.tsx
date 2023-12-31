"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { navigation } from "@/constants/data";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-full h-20 bg-[#FCD4D1] sticky top-0 z-50">
      <div className="max-w-screen-xl mx-10  h-full flex items-center justify-between px-4 xl:px-0 relative">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo Image" className="w-20" />
        </Link>
        <ul className=" hidden md:flex items-center text-sm uppercase gap-5 font-semibold text-zinc-600">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href}>
              <li className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">
                {item.title}
                <span className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            </Link>
          ))}
        </ul>
        <div
          onClick={() => setShow(!show)}
          className="inline-flex md:hidden cursor-pointer text-zinc-700 hover:text-black duration-200"
        >
          {show ? <X /> : <Menu />}
        </div>
        {show && (
          <ul className="absolute right-0 px-10 py-6 top-20 z-10 inline-flex md:hidden flex-col bg-black items-start text-sm uppercase gap-5 font-semibold text-zinc-200">
            {navigation.map((item) => (
              <Link key={item.title} href={item.href} target={item?.Target}>
                <li
                  className={`hover:text-white cursor-pointer duration-300 relative group overflow-hidden ${
                    pathname === item.href && "text-black"
                  }`}
                >
                  {item.title}
                  <span
                    className={`h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ${
                      pathname === item.href && "translate-x-0"
                    }`}
                  />
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
