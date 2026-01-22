import {useState,useEffect,useRef,useMemo, useCallback, useReducer} from 'react';
import {Component1} from './components/Component1';
import {Component2} from './components/Component2';
import {Component3} from './components/Component3';
import Context from './context/creatingContext';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

const reducer=(cnt,action)=>{
  if(action.type==='inc'){
    return cnt+1;
  }
  return cnt-1;
}

function App() {


  const [counter,setCounter]=useState(0);  // --> It is storing the user no. , i am using it for testing useState()
  const [userObj,setUserObj]=useState({});    //  --> It is storing the object from api , testing for useEffect() stores whenever counter changes
  const refer=useRef(null);  // ---> I am giving DOM access to component 3's span
  const [callAPIsum,setApisum]=useState(0);  // --> state stores sum , i create it for testing useMemo()

  const [cnt,dispatch]=useReducer(reducer,0);




  // functions related to counter
  const handleInc=()=>{
    if(counter<=9)
      setCounter((prevcnt)=> prevcnt+1);
    else{
      setUserObj({});
    }
  }

  const handleDec=()=>{

    if(counter>1)
      setCounter((prevcnt)=> prevcnt-1);
    else if(counter===1){
      setCounter((prevcnt)=> prevcnt-1);
      setUserObj({});
    }

    else alert(`user can't be -ve`);
  }




  // Runs only on every render
  useEffect(()=>{
    console.log('I am running on every render');
  });


  // Runs only on first render
  useEffect(()=>{
    console.log('I am running on first render');
  },[]);


  // Runs only when dependency change & when first time page load
  useEffect(()=>{
    if(counter<=10 && counter>0){
      fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        console.log(data);
        setUserObj(data);
      })
      .catch((err)=>{
        console.log(err);
      })

      refer.current.style.color='blue';
    }
    else{
      refer.current.style.color='black';
    }
    
  },[counter]);







 // it is unnecessary function , that returns same output 
  const callingAPI=async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data=await res.json();
    for(let i=0;i<10000000000;i++){}

    let sum=0;
    data.forEach((obj)=>{
      sum+=obj.id;
    })
    setApisum(sum);
    return callAPIsum;
  }


  // callingAPI();   ---->> cal this only for checking without useMemo working of function
  

  // useMemo -> runs this function only when dependency change.
  // const memoizedValue=useMemo(callingAPI,[callAPIsum]);

  // useEffect(()=>{
  //   console.log(memoizedValue);
  // },[callAPIsum]);





  const handleFn=()=>{
    console.log('handle fn runs.... due to parent rerender');
  }

  const cashedFunctionUsingCallback=useCallback(handleFn,[]);



  

  return (
    <Context.Provider value={counter}>
      <div className="counter-container">
        User: {counter}
      </div>

      <button className="btn" onClick={handleInc}>
        User++
      </button>

      <button className="btn" onClick={handleDec}>
        User--
      </button>



      <br/>
      <br/>
      <br/>

      <Component1 userObj={userObj}></Component1>
      <Component2 userObj={userObj}></Component2>
      <Component3 userObj={userObj} refer={refer}></Component3>
      <Component4></Component4>


      {/* <Component5 handleFn={handleFn}></Component5>  */}

      <Component5 handleFn={cashedFunctionUsingCallback}></Component5>

      <div>{cnt}</div>

      <button onClick={()=> dispatch({type:"inc"})}>Inc </button>
      <button onClick={()=> dispatch({type:"dec"})}>Dec </button>

      


      
    </Context.Provider>
  )
}

export default App
