import React from "react";

const TitleHead = ({ children, twColor = "text-app-color2" }) => {
  return (
    <h1
      className={`font-nanum text-4xl font-bold text-center capitalize ${twColor}`}
    >
      {children}
    </h1>
  );
};

export default TitleHead;
