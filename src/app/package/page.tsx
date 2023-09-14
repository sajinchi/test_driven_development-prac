"use client";

import { Add, List } from "@/src/components/package";


const Package = () => {
  return (
    <>
      <div className="flex flex-row">
        <span className="flex-grow text-3xl">Package</span>
        <Add />
      </div>
      <List />
    </>
  );
};

export default Package;