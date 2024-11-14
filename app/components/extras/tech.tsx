import React from "react";

const Tech = ({ name }: any) => {
  return (
    <div className="bg-sky-100 text-sm md:text-lg rounded-lg text-sky-900 md:font-semibold px-2">
      <p>{name}</p>
    </div>
  );
};

export default Tech;
