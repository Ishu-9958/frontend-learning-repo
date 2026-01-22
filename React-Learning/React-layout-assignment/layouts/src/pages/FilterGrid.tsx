import { Card } from "../components/FilterGridComponent/Card";
import { NavBarFilterGrid } from "../components/FilterGridComponent/NavBarFilterGrid";

export const FilterGrid = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <NavBarFilterGrid/>
        
        <div className="flex flex-1">
          <div className="w-72 border-r border-neutral-200 p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="h-5 w-20 bg-neutral-300 rounded"></div>
              <div className="h-10 bg-neutral-100 rounded"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-5 w-24 bg-neutral-300 rounded"></div>
              <div className="h-2 bg-neutral-200 rounded-full"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-5 w-20 bg-neutral-300 rounded"></div>
              <div className="flex flex-col gap-2">

                {new Array(3).fill(null).map((item,index)=>{
                    return <div className="h-6 bg-neutral-100 rounded" key={index}></div>
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-5 w-28 bg-neutral-300 rounded"></div>
              <div className="flex flex-col gap-2">
                {new Array(2).fill(null).map((item,index)=>{
                    return <div className="h-6 bg-neutral-100 rounded" key={index}></div>
                })}
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
            <div className="flex justify-between items-center">
              <div className="h-6 w-48 bg-neutral-200 rounded"></div>
              <div className="h-8 w-32 bg-neutral-100 rounded"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 flex-1">
                {new Array(6).fill(null).map((item,index)=>{
                return <Card key={index}/>
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
