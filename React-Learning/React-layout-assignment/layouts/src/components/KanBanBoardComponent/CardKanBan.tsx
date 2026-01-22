import React from "react";
import { MessageKanBan } from "./MessageKanBan";

export const CardKanBan = ({messageCount}:{messageCount:React.ReactNode}) => {
  return (
    <div className="w-72 shrink-0 bg-neutral-200 rounded-xl p-3 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="h-5 w-24 bg-neutral-400 rounded"></div>
        <div className="h-5 w-6 bg-neutral-400 rounded"></div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {new Array(messageCount).fill(null).map((_,index)=> <MessageKanBan key={index}/>)}
      </div>
      <div className="h-8 w-full bg-neutral-300 rounded mt-2"></div>
    </div>
  );
};
