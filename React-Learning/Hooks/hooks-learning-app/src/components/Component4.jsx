import {memo} from 'react';

const Component4=()=>{

    console.log('component 4 rerendered');

    return (
        <div>
         <button> component 4 : I will not re-render even my parent can</button>
       </div>
    );
}


// export default Component4

export default memo(Component4);  // -> It is React.memo , prevents from re-rendering even parent of this renders