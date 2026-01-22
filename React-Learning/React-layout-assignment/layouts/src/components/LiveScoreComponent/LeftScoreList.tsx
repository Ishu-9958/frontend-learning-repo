import React from "react";

export const LeftScoreList = ({ topItem }: { topItem: React.ReactNode }) => {
  return (
    <>
      {topItem ? (
        <div className="h-10 bg-neutral-100 flex items-center px-4">
          <div className="w-48 h-4 bg-neutral-300 rounded"></div>
          <div className="flex-1"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
        </div>
      ) : (
        <div className="h-12 flex items-center px-4 border-t border-neutral-100">
          <div className="w-48 h-4 bg-neutral-200 rounded"></div>
          <div className="flex-1"></div>
          <div className="w-12 h-4 bg-neutral-100 rounded"></div>
          <div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
          <div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
          <div className="w-12 h-4 bg-neutral-100 rounded ml-4"></div>
        </div>
      )}
    </>
  );
};
