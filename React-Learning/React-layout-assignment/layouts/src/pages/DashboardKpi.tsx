export const DashboardKpi = () => {
  return (
    <div className="flex h-full">
      <div className="w-16 bg-neutral-900 flex flex-col items-center py-4 gap-4">
        <div className="h-10 w-10 bg-neutral-700 rounded"></div>

        {new Array(3).fill(null).map((item,index)=>{
            return <div className="h-10 w-10 bg-neutral-800 rounded" key={index}></div>
        })}

        <div className="flex-1"></div>
        <div className="h-10 w-10 bg-neutral-800 rounded-full"></div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b border-neutral-200 flex items-center px-6 justify-between">
          <div className="h-6 w-48 bg-neutral-200 rounded"></div>
          <div className="flex gap-2">
            <div className="h-8 w-32 bg-neutral-100 rounded"></div>
            <div className="h-8 w-8 bg-neutral-100 rounded"></div>
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col gap-6 overflow-auto bg-neutral-50">
          <div className="grid grid-cols-4 gap-4">

            {new Array(4).fill(null).map((item,index)=>{
                return <div className="h-28 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col justify-between" key={index}>
                <div className="h-4 w-20 bg-neutral-200 rounded"></div>
                <div className="h-8 w-24 bg-neutral-300 rounded"></div>
                <div className="h-3 w-16 bg-neutral-100 rounded"></div>
                </div>
            })}
          </div>
          <div className="flex gap-4 flex-1">
            <div className="flex-[2] bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
              <div className="h-6 w-32 bg-neutral-200 rounded mb-4"></div>
              <div className="flex-1 bg-neutral-100 rounded"></div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
              <div className="h-6 w-24 bg-neutral-200 rounded mb-4"></div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-[20px] border-neutral-200 border-t-neutral-900"></div>
              </div>
            </div>
          </div>
          <div className="h-64 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
            <div className="h-6 w-40 bg-neutral-200 rounded mb-4"></div>
            <div className="flex-1 bg-neutral-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
