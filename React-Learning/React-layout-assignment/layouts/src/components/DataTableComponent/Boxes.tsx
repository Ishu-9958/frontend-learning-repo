import React from "react";

export const Boxes = ({ head }: { head: React.ReactNode }) => {
  return (
    <>
      {head ? (
        <>
          <div className="w-12 h-5 bg-neutral-200 rounded"></div>
          <div className="w-48 h-5 bg-neutral-200 rounded ml-4"></div>
          <div className="w-40 h-5 bg-neutral-200 rounded ml-4"></div>
          <div className="w-32 h-5 bg-neutral-200 rounded ml-4"></div>
          <div className="w-32 h-5 bg-neutral-200 rounded ml-4"></div>
          <div className="w-24 h-5 bg-neutral-200 rounded ml-4"></div>
          <div className="flex-1"></div>{" "}
        </>
      ) : (
        <>
          <div className="w-12 h-5 bg-neutral-200 rounded"></div>
          <div className="w-48 h-5 bg-neutral-100 rounded ml-4"></div>
          <div className="w-40 h-5 bg-neutral-100 rounded ml-4"></div>
          <div className="w-32 h-5 bg-neutral-100 rounded ml-4"></div>
          <div className="w-32 h-5 bg-neutral-100 rounded ml-4"></div>
          <div className="w-24 h-5 bg-neutral-200 rounded ml-4"></div>
          <div className="flex-1"></div>
        </>
      )}
    </>
  );
};
