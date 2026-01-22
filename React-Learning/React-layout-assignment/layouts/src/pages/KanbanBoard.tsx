
import { NavKanBan } from "../components/KanBanBoardComponent/NavKanBan";
import { MainKanBan } from "../components/KanBanBoardComponent/MainKanBan";

export const KanbanBoard = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <NavKanBan />
        <MainKanBan/>
      </div>
    </>
  );
};
