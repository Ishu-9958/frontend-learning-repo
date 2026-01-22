import { LeftVideoSide } from "../components/VideoPlayerComponent/LeftVideoSide"
import { RightVideoSide } from "../components/VideoPlayerComponent/RightVideoSide";
import { VideoPlayerNav } from "../components/VideoPlayerComponent/VideoPlayerNav"

export const VideoPlayer = () => {
  return (
    <div className="flex flex-col h-full bg-neutral-100">
      <VideoPlayerNav />
      <div className="flex-1 flex p-6 gap-6 overflow-auto">
        <LeftVideoSide/>
        <RightVideoSide/>
      </div>
    </div>
  );
};
