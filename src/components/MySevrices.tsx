"use client";
import { servicesDetails } from "@/constants/data";
import Container from "./Container";
import Title from "./Title";

const MySevrices = () => {
  console.log(servicesDetails);

  return (
    <section id="myservices">
      <Container className="border border-black mt-10">
        <Title title="My Servrices" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {servicesDetails.map((item) => (
            <div
              key={item?.title}
              className="border border-zinc-300 p-5 rounded-md shadow-xl hover:shadow-none"
            >
              <div className="flex items-center gap-2 md-4">
                <p className="text-xl font-bold">{item?.title}</p>
                {
                  <span className="text-designcolor animate-bounce">
                    {<item.icon />}
                  </span>
                }
              </div>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MySevrices;
