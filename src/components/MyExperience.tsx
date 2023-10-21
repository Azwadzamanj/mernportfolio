import React from "react";
import Container from "./Container";
import Title from "./Title";
import { experinces } from "@/constants/data";

const MyExperience = () => {
  return (
    <div>
      <Container>
        <Title title="My Experience" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {experinces.map((item) => (
            <div
              key={item?.title}
              className="border border-zinc-300 p-5 rounded-md shadow-xl hover:shadow-none"
            >
              <div className="flex items-center gap-2 md-4">
                <p className="text-xl font-bold">{item?.title}</p>
              </div>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyExperience;
