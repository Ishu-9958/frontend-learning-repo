import React from "react";
import { Circle } from "../Circle";

export const ProfileList = () => {
  return (
    <div className="flex gap-2 py-2">
        <Circle className="h-8 w-8 bg-neutral-200 rounded-full"/>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-3 w-full bg-neutral-100 rounded"></div>
        <div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
};
