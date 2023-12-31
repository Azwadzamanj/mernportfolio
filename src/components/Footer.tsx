import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { navigation, services } from "@/constants/data";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-zinc-700 text-zinc-200 mt-10">
      <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:place-items-center ">
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="Logo Image" className="w-24" />
          </Link>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eos
            doloribus. Sit quod iure officiis distinctio incidunt explicabo,
            iste eos.
          </p>
        </div>
        <ul className="flex flex-col items-start text-sm uppercase gap-5 font-semibold">
          {navigation.map((item) => (
            <Link key={item.title} href={item.href}>
              <li className="hover:text-white cursor-pointer duration-300 relative group overflow-hidden">
                {item.title}
                <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
              </li>
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col items-start text-sm uppercase gap-5 font-semibold">
          {services.map((item) => (
            <li className="hover:text-white cursor-pointer duration-300 relative group overflow-hidden">
              {item.title}
              <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
            </li>
          ))}
        </ul>
        <div>
          <p className="mb-2">Reach me with</p>
          <ul className="flex items-center justify-center gap-2">
            <a href="https://facebook.com" target="blank">
              <li className="w-8 h-8 bg-zinc-300 text-zinc-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer duration-300">
                <Facebook />
              </li>
            </a>
            <a href="https://youtube.com" target="blank">
              <li className="w-8 h-8 bg-zinc-300 text-zinc-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer duration-300">
                <Youtube />
              </li>
            </a>
            <a href="https://www.instagram.com" target="blank">
              <li className="w-8 h-8 bg-zinc-300 text-zinc-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black cursor-pointer duration-300">
                <Instagram />
              </li>
            </a>
          </ul>
        </div>
      </Container>
    </div>
  );
}
