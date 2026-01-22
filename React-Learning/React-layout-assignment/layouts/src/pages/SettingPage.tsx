import { LeftSettingPage } from "../components/SettingPageComponent/LeftSettingPage"
import { RightSettingPage } from "../components/SettingPageComponent/RightSettingPage";


export const SettingPage = () => {
  return (
    <div className="flex h-full">
      <LeftSettingPage/>
      <RightSettingPage/>
    </div>
  );
};
