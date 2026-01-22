import { Circle } from "./Circle"

export const NavKanBan = () => {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-6 w-48 bg-neutral-200 rounded"></div>
      <div className="flex-1"></div>
      <div className="flex -space-x-2">
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
      </div>
      <div className="h-8 w-24 bg-neutral-100 rounded"></div>
    </div>
  );
};
