import Container from "@/components/Container";
import Image from "next/image";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import MySevrices from "@/components/MySevrices";
import MyExperience from "@/components/MyExperience";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutMe />
      <MySevrices />
      <MyExperience />
    </main>
  );
}
