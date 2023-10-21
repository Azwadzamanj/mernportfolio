"use client";
import Image from "next/image";
import BannerImg from "../assets/banner.png";
import Container from "./Container";

const Banner = () => {
  return (
    <section id="#banner">
      <Container>
        <div className="flex items-center flex-col sm:flex-row ">
          <div className="w-full sm:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">BPI Mern</h2>
            <p className="text-lg font-medium">MERN Stack Developer</p>
            <p className="text-base tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              perferendis dignissimos odit corrupti dolorum nemo ipsam, repellat
              magnam sint nulla dolorem unde reprehenderit exercitationem,
              suscipit maiores deserunt consequuntur repudiandae fugit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              sapiente magni neque atque veniam unde aspernatur, fuga quo
              quaerat voluptatem sint est perspiciatis molestiae expedita
              possimus! Voluptatibus veritatis est et.
            </p>
            <a href="/resume.pdf" target="_blank">
              <button className="w-32 h-10 bg-zinc-800  text-zinc-200 hover:bg-black rounded-md hover:text-white cursor-pointer duration-200">
                Hire Me
              </button>
            </a>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image
              src={BannerImg}
              alt="Banner image"
              className="h-[450px] w-[450px] object-contain z-40"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
