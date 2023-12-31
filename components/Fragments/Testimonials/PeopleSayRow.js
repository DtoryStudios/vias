import React from "react";
import PeopleSayCard from "./PeopleSayCard";

function PeopleSayRow({ className }) {
  return (
    <>
      <div
        className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-6 w-full shrink-0 transition-all duration-1000`}
      >
        <PeopleSayCard />
        <PeopleSayCard />
        <PeopleSayCard />
      </div>
    </>
  );
}

export default PeopleSayRow;
