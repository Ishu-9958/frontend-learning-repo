import { CardKanBan } from "./CardKanBan";


export const MainKanBan = () => {
  return (
    <div className="flex-1 p-6 flex gap-4 overflow-x-auto bg-neutral-100">
      <CardKanBan messageCount={3}/>
      <CardKanBan messageCount={4}/>
      <CardKanBan messageCount={2}/>
      <CardKanBan messageCount={3}/>
      <CardKanBan messageCount={3}/>
      
    </div>
  );
};
