import React from "react";
import { ProfileList } from "./ProfileList";

export const RightFeed = () => {
  return (
    <div className="w-72 flex flex-col gap-4">
      <div className="bg-white rounded-xl border border-neutral-200 p-4">
        <div className="h-5 w-32 bg-neutral-200 rounded mb-3"></div>
        <ProfileList />
        <ProfileList />
        <ProfileList />
      </div>
      <div className="bg-white rounded-xl border border-neutral-200 p-4">
        <div className="h-5 w-24 bg-neutral-200 rounded"></div>
      </div>
    </div>
  );
};
