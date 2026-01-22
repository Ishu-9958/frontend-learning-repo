export const MessageKanBan = () => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
      <div className="h-4 w-full bg-neutral-200 rounded"></div>
      <div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-1">
          <div className="h-5 w-12 bg-neutral-200 rounded"></div>
        </div>
        <div className="h-6 w-6 bg-neutral-200 rounded-full"></div>
      </div>
    </div>
  );
};
