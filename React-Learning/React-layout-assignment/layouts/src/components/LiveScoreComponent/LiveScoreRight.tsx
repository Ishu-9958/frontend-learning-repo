import { RightScoreList } from "./RightScoreList";

export const LiveScoreRight = () => {
  return (
    <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
      <div className="h-6 w-24 bg-neutral-200 rounded"></div>
      <RightScoreList/>
      <RightScoreList/>
      <RightScoreList/>
      <RightScoreList/>
    </div>
  );
};
