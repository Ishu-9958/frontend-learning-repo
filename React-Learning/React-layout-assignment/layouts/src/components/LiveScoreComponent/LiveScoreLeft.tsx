import { LeftScoreList } from "./LeftScoreList";

export const LiveScoreLeft = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex gap-2 border-b border-neutral-200 pb-2">
        <div className="h-8 w-24 bg-neutral-900 rounded"></div>
        <div className="h-8 w-24 bg-neutral-100 rounded"></div>
        <div className="h-8 w-24 bg-neutral-100 rounded"></div>
        <div className="h-8 w-24 bg-neutral-100 rounded"></div>
      </div>
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        
        <LeftScoreList topItem={true}/>
        <LeftScoreList topItem={false}/>
        <LeftScoreList topItem={false}/>
        <LeftScoreList topItem={false}/>
        <LeftScoreList topItem={false}/>
        <LeftScoreList topItem={false}/>
    
      </div>
    </div>
  );
};
