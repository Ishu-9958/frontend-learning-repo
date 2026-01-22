import {Box} from '../components/Box';
import { MainList } from '../components/SideBarContentComponents/MainList';

const SideBarContent = () => {
  return (
    <>
      <div className="flex h-full">
        <div className="w-64 border-r border-neutral-200 flex flex-col">
          <div className="p-4">
            <div className="h-12 bg-neutral-900 rounded"></div>
          </div>
          <div className="flex-1 p-4 pt-0 flex flex-col gap-1">
            

            {new Array(7).fill(null).map((item,index)=>{
              let className="h-10 bg-neutral-100 rounded";
              if(index===0) className="h-10 bg-neutral-200 rounded";
              else if(index===4) className="h-px bg-neutral-200 my-2";
              return <Box className={className} key={index}></Box>
            })}
            
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-14 border-b border-neutral-200 flex items-center px-4 gap-2">
            <div className="h-8 w-8 bg-neutral-200 rounded"></div>
            <div className="h-8 w-8 bg-neutral-200 rounded"></div>
            <div className="flex-1"></div>
            <div className="h-8 w-64 bg-neutral-100 rounded"></div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-0 overflow-auto">
            {new Array(8).fill(null).map((item,index)=>{
              return <MainList key={index}></MainList>

            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarContent;
