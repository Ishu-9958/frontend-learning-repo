import { LeftFeed } from "../components/ProfileFeedComponent/LeftFeed";
import { NavProfileFeed } from "../components/ProfileFeedComponent/NavProfileFeed";
import { RightFeed } from "../components/ProfileFeedComponent/RightFeed";

export const ProfileFeed = () => {
  return (
    <>
      <div className="flex flex-col h-full bg-neutral-100">
        <NavProfileFeed/>
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto py-4 flex gap-4">
            <LeftFeed/>
            <RightFeed/>
          </div>
        </div>
      </div>
    </>
  );
};
