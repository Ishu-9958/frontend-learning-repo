import { FooterMessages } from "../components/ChatMessangerComponent/FooterMessages"
import { MainMessageContainer } from "../components/ChatMessangerComponent/MainMessageContainer"
import { NavMessage } from "../components/ChatMessangerComponent/NavMessage"
import { SideBar } from "../components/ChatMessangerComponent/SideBar"


export const ChatMessenger = () => {
  return (
    <div className="flex h-full">
        <SideBar/>

        <div className="flex-1 flex flex-col">
            <NavMessage/>
            <MainMessageContainer/>
            <FooterMessages/>
        </div>
    </div>
  )
}
