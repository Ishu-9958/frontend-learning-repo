import { PersonsProfile } from "./PersonsProfile";

export const SideBar = () => {
  return (
    <div className="w-64 border-r border-neutral-200 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-4">
        <div className="h-8 flex-1 bg-neutral-100 rounded"></div>
      </div>
      <div className="flex-1 flex flex-col overflow-auto">
        {new Array(8).fill(null).map((_,index)=>{
            return index===0 ? <PersonsProfile first={true} key={index}/> : <PersonsProfile first={false} key={index}/>
        })}
      </div>
    </div>
  );
};
