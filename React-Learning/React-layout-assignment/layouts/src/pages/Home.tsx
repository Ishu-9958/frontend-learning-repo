import { Link } from "react-router-dom";

function Home(){

    const paths=['','3-column-feed','sidebar-content','filter-grid','dashboard-kpi','data-table','kanban-board','chat-messenger','profile-feed','search-result'
        ,'video-player','ecommerce-pdp'
    ];

    return <>

       <div className="border-8 p-6 bg-gray-700 min-h-full flex flex-col gap-12 ">

        <div className=" text-white font-bold text-2xl self-center">React Assignment</div>

        <div className="self-center ">

            <a href="https://github.com/Ishu-9958/frontend-learning-repo/tree/main/React-Learning/React-layout-assignment/layouts" target="_blank" className="text-white font-bold text-2xl cursor-pointer hover:text-blue-500 text-center font-mono">Code</a>
        </div>

        <div className="flex flex-col  w-full  justify-around self-center gap-7">
            {paths.map((path,index)=>{
            return <Link to={path} className="block cursor-pointer text-white hover:text-blue-400 h-full w-48" key={index}>{path}</Link>
        })}
        </div>
       </div>
    </>
}

export default Home;