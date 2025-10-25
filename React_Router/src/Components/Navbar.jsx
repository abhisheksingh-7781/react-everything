
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className='nav'>
            <h2>Blinkit</h2>
            <div>
              <Link to='/' >Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/content'>Content</Link>
            </div>
        </div>
  )
}

export default Navbar