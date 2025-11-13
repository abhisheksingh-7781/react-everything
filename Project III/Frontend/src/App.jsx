import { useEffect } from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './Routes/MainRoutes'
import { useDispatch } from 'react-redux'
import { asynctCurrentUser } from './Store/actions/userActions'
import Home from './pages/Home'
import { asyncLoadProducts } from './Store/actions/productActions'

const App = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(asynctCurrentUser())
    dispatch(asyncLoadProducts())
  },[])
  return (
    <div className='min-h-screen w-full bg-gray-800 text-white'>
      <Navbar />  
      <MainRoutes/>
    </div>
  )
}

export default App

