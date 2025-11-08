import { useEffect } from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './Routes/MainRoutes'
import { useDispatch } from 'react-redux'
import { asynctCurrentUser } from './Store/actions/userActions'

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(asynctCurrentUser())
  },[])
  return (
    <div className='min-h-screen w-full bg-gray-800 text-white'>
      <Navbar />  
      <MainRoutes/>
      
    </div>
  )
}

export default App

