import { useEffect } from 'react'
import Navbar from './components/Navbar'
import MainRoutes from './Routes/MainRoutes'
import { useDispatch } from 'react-redux'
import { asynctCurrentUser } from './Store/actions/userActions'
import Home from './pages/Home'

const App = () => {
  const sampleProducts = [
  {
    image: "https://picsum.photos/300",
    title: "Smart Watch",
    desc: "A sleek smart watch with premium health tracking features.",
    price: 1999
  },
  {
    image: "https://picsum.photos/300",
    title: "Bluetooth Earbuds",
    desc: "Noise cancellation earbuds for an immersive experience.",
    price: 1599
  }
];
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(asynctCurrentUser())
  },[])
  return (
    <div className='min-h-screen w-full bg-gray-800 text-white'>
      <Navbar />  
      <MainRoutes/>
    <Home products={sampleProducts} />

      
    </div>
  )
}

export default App

