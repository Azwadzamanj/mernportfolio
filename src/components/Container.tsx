import React from "react";

interface props {
  children: React.ReactNode | React.ReactNode[];
  //@ts-ignore
  className?: string;
}

const Container = ({ children, className }: props) => {
  return (
    <div className={`max-w-screen-xl max-auto py-10 px-4  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
