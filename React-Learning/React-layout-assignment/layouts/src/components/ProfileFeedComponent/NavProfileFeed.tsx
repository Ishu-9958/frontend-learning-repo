import { Box } from "../Box";
import { Circle } from "../Circle";


export const NavProfileFeed = () => {
  return (
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-8 w-8 bg-neutral-900 rounded"></div>
      <div className="h-10 w-64 bg-neutral-100 rounded-full"></div>
      <div className="flex-1"></div>
      <div className="flex gap-4">
        <Box className="h-8 w-8 bg-neutral-200 rounded" />
        <Box className="h-8 w-8 bg-neutral-200 rounded" />
        <Box className="h-8 w-8 bg-neutral-200 rounded" />
        <Box className="h-8 w-8 bg-neutral-200 rounded" />
      </div>
      <Circle className="h-8 w-8 bg-neutral-300 rounded-full" />
    </div>
  );
};
