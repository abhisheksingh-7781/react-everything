import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Content from './pages/Content'
import Product from './pages/Product'
import PageNotFond from './pages/PageNotFond'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Kids from './pages/Kids'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/content' element={<Content/>}  />
        <Route path='/product' element={<Product/>}  >
                 <Route path='men' element={<Mens/>}  />
                 <Route path='women' element={<Women/>}  />
                 <Route path='kids' element={<Kids/>}  />
        </Route>
        <Route path='*' element={<PageNotFond/>}  />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App



