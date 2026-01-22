import React from "react";

function Box() {
  return (
    <>
      <div className="h-10 w-10 bg-neutral-300 rounded-full shrink-0"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="h-4 w-24 bg-neutral-200 rounded"></div>
          <div className="h-3 w-10 bg-neutral-200 rounded"></div>
        </div>
        <div className="h-3 w-full bg-neutral-100 rounded"></div>
      </div>
    </>
  );
}

export const PersonsProfile = ({ first }: { first: React.ReactNode }) => {
  return (
    <>
      {first ? (
        <div className="h-16 flex items-center gap-3 px-4 bg-neutral-100">
            <Box/>
        </div>
      ) : (
        <div className="h-16 flex items-center gap-3 px-4 hover:bg-neutral-50">
          <Box/>
        </div>
      )}
    </>
  );
};
