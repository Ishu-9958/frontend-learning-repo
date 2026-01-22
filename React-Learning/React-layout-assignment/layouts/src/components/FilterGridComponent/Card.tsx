export const Card = () => {
  return (
    <div className="bg-neutral-100 rounded-xl overflow-hidden flex flex-col">
      <div className="h-48 bg-neutral-200"></div>
      <div className="p-4 flex flex-col gap-2">
        <div className="h-5 bg-neutral-200 rounded w-3/4"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
        <div className="h-6 bg-neutral-300 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
};
