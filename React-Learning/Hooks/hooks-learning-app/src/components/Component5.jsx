import {memo} from 'react';

const Component5=({handleFn})=>{

    console.log('component 5 rerendered');
    handleFn();

    return (
       <div>
         <button> component 5 : I will not re-render even my parent can</button>
       </div>
    );
}


// export default Component5

export default memo(Component5);  

/* 

Problem:

It is React.memo , prevents from re-rendering even parent of this renders
but here prop is a function that this child component gets, 
but the problem is whenever parents rerenders, then new function reference will create at that point
so, React.memo will see if function get a new reference in this current child component
it will rerender this also.


Solution : useCallback()

*/