import { Link } from "react-router-dom";

function Home(){

    const paths=['','3-column-feed','sidebar-content','filter-grid','dashboard-kpi','data-table','kanban-board','chat-messenger'];

    return <>

       <div className="border-8 p-6 bg-gray-700 min-h-full flex flex-col gap-12 ">

        <div className=" text-white font-bold text-2xl self-center">React Assignment</div>

        <div className="flex flex-col  w-full  justify-around self-center gap-7">
            {paths.map((path,index)=>{
            return <Link to={path} className="block cursor-pointer text-white hover:text-blue-400 h-full w-48" key={index}>{path}</Link>
        })}
        </div>
       </div>
    </>
}

export default Home;