import { useDispatch,useSelector } from 'react-redux'
import { getData } from './store/UserAction'

import  { useEffect } from 'react'



const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state) => state);
  console.log(data);

useEffect(()=>{
 dispatch(getData())
},[])
  return (
    <div>App</div>
  )
}

export default App