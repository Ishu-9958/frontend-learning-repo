import { Box } from "../components/Box";

function ThreeColumnFeed(){
    return (<>

    <div className="flex h-full">
        <div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-2">

          {new Array(5).fill(null).map((item, index) => {
            const className= index===0? `h-10 bg-neutral-200 rounded` : `h-10 bg-neutral-100 rounded`;
            return  <Box key={index} className={className}></Box>
          })}
          
          <div className="flex-1"></div>
          <div className="h-12 bg-neutral-900 rounded"></div>
        </div>
        <div className="flex-1 border-r border-neutral-200 flex flex-col">
          <div className="h-14 border-b border-neutral-200"></div>
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">

            {new Array(3).fill(null).map((item, index) => {
            const className= index%2===0? "h-40 bg-neutral-100 rounded border border-neutral-200" : "h-56 bg-neutral-100 rounded border border-neutral-200";
            return  <Box key={index} className={className}></Box>
          })}
          </div>
        </div>
        <div className="w-80 p-4 flex flex-col gap-4">
          <div className="h-10 bg-neutral-100 rounded-full"></div>
          <div className="h-48 bg-neutral-100 rounded-xl"></div>
          <div className="h-64 bg-neutral-100 rounded-xl"></div>
        </div>
      </div>
    </>);
}

export default ThreeColumnFeed;