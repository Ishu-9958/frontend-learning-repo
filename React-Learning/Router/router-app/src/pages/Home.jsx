import {useEffect} from 'react';

export const Home = () => {

    useEffect(()=>{
        console.log('Home');
    },[]);
  return (
    <div style={{textAlign:'center'}}>Home</div>
  )
}
