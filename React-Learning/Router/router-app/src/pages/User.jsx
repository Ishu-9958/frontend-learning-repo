import {useParams} from 'react-router-dom';

export const User = () => {

    const {id}=useParams();

  return (
    <div style={{textAlign:'center'}}>User : {id}</div>
  )
}
