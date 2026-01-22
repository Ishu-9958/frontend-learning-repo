import { LiveScoreLeft } from "../components/LiveScoreComponent/LiveScoreLeft"
import { LiveScoreNav } from "../components/LiveScoreComponent/LiveScoreNav"
import { LiveScoreNavNext } from "../components/LiveScoreComponent/LiveScoreNavNext"
import { LiveScoreRight } from "../components/LiveScoreComponent/LiveScoreRight";

export const LiveScore = () => {
  return (
    <div className="flex flex-col h-full">
      <LiveScoreNav/>
      <LiveScoreNavNext/>
      <div className="flex-1 flex overflow-auto">
        <LiveScoreLeft/>
        <LiveScoreRight/>
      </div>
    </div>
  );
};
