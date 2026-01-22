import { SquareBox } from "./SquareBox";

export const NavMessage = () => {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-3">
      <div className="h-10 w-10 bg-neutral-200 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="h-5 w-32 bg-neutral-200 rounded"></div>
        <div className="h-3 w-20 bg-neutral-100 rounded"></div>
      </div>
      <div className="flex-1"></div>
      <SquareBox/>
      <SquareBox/>
      <SquareBox/>
    </div>
  );
};
