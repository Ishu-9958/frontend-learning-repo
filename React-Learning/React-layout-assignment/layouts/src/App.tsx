import "./App.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ThreeColumnFeed from "./pages/ThreeColumnFeed";
import Home from "./pages/Home";
import SideBarContent from "./pages/SideBarContent";
import { FilterGrid } from "./pages/FilterGrid";
import { DashboardKpi } from "./pages/DashboardKpi";
import { DataTable } from "./pages/DataTable";
import { KanbanBoard } from "./pages/KanbanBoard";
import { ChatMessenger } from "./pages/ChatMessenger";
import { ProfileFeed } from "./pages/ProfileFeed";
import { SearchResult } from "./pages/SearchResult";
import { VideoPlayer } from "./pages/VideoPlayer";
import { EcommercePdp } from "./pages/EcommercePdp";
import { LiveScore } from "./pages/LiveScore";
import { SettingPage } from "./pages/SettingPage";


const router=createBrowserRouter([

  {
    path:'/',
    element:<Home></Home>
  },

  {
    path:'3-column-feed',
    element:<ThreeColumnFeed/>
  }
  ,{
    path:'sidebar-content',
    element:<SideBarContent/>
  },{
    path:'filter-grid',
    element:<FilterGrid/>
  }
  ,{
    path:'dashboard-kpi',
    element:<DashboardKpi/>
  }
  ,{
    path:'data-table',
    element: <DataTable/>
  }
  ,{
    path:'kanban-board',
    element: <KanbanBoard/>
  }
  ,{
    path:'chat-messenger',
    element: <ChatMessenger/>
  }
  ,{
    path:'profile-feed',
    element: <ProfileFeed/>
  }
  ,{
    path:'search-result',
    element: <SearchResult/>
  }
  ,{
    path:'video-player',
    element: <VideoPlayer/>
  }
  ,{
    path:'ecommerce-pdp',
    element: <EcommercePdp/>
  }
  ,{
    path:'live-score',
    element: <LiveScore/>
  }
  ,{
    path:'setting-page',
    element: <SettingPage/>
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  

  );
}

export default App;
