import {useState} from 'react';

export const App = () => {

  const colorArr=['red','black','blue','green','white'];
  const [color,setColor]=useState('red');
  return (
    <>

    <div className="container" style={{backgroundColor:color,width:"100vw",height:"100vh"}}>

      {colorArr.map((item,index)=>(
        <button key={index} style={{cursor:"pointer"}} onClick={()=>{setColor(item)}}>{item}</button>
      ))}

    </div>
    </>
  )
}
