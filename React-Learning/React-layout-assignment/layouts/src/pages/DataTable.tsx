import { Boxes } from "../components/DataTableComponent/Boxes";
import { Rounded } from "../components/DataTableComponent/Rounded";
import { TwoSquare } from "../components/DataTableComponent/TwoSquare";

export const DataTable = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex flex-col h-full">
        <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
          <div className="h-6 w-40 bg-neutral-200 rounded"></div>
          <div className="flex-1"></div>
          <div className="h-8 w-32 bg-neutral-100 rounded"></div>
          <div className="h-8 w-24 bg-neutral-900 rounded"></div>
        </div>
        <div className="h-12 border-b border-neutral-200 flex items-center px-6 gap-2">
          <Rounded />
          <Rounded />
          <Rounded />
          <div className="flex-1"></div>
          <div className="h-7 w-48 bg-neutral-100 rounded"></div>
        </div>
        <div className="overflow-auto">
          <div className="min-w-full">
            <div className="h-10 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 sticky top-0">
              <Boxes head={true} />
              <div className="w-20 h-5 bg-neutral-200 rounded"></div>
            </div>
            {new Array(10).fill(null).map((_, index) => {
              return (
                <div className="h-14 border-b border-neutral-100 flex items-center px-4 hover:bg-neutral-50" key={index}>
                  <Boxes head={false} />
                  <TwoSquare />
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-12 border-t border-neutral-200 flex items-center justify-between px-6 mt-56">
          <div className="h-5 w-32 bg-neutral-200 rounded"></div>
          <div className="flex gap-2">
            {new Array(5).fill(null).map((_, index) => {
              return index == 1 ? (
                <div
                  className="h-8 w-8 bg-neutral-200 rounded"
                  key={index}
                ></div>
              ) : (
                <div
                  className="h-8 w-8 bg-neutral-100 rounded"
                  key={index}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
