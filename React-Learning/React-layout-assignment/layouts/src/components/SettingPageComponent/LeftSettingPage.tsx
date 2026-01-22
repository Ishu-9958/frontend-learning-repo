import { SettingPageLeftItem } from "./SettingPageLeftItem";


export const LeftSettingPage = () => {
  return (
    <div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-1">
      <div className="h-10 w-full bg-neutral-100 rounded flex items-center px-3 mb-4">
        <div className="h-4 flex-1 bg-neutral-200 rounded"></div>
      </div>
      <SettingPageLeftItem isFirst={true}/>
      <SettingPageLeftItem isFirst={false}/>
      <SettingPageLeftItem isFirst={false}/>
      <SettingPageLeftItem isFirst={false}/>
      <SettingPageLeftItem isFirst={false}/>
      <SettingPageLeftItem isFirst={false}/>
      <SettingPageLeftItem isFirst={false}/>
      <SettingPageLeftItem isFirst={false}/>
    </div>
  );
};
