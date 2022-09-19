import './Navbar.css';
import { FaEnvelopeOpen } from 'react-icons/fa';

const Navbar = () => {
  const iconstyle = {
    color: 'rgb(147, 147, 255)'

  }
  return(
    <nav className='navbar'>

      <div>
          <FaEnvelopeOpen style={iconstyle}/> Estatery
        
          <a href='/' className='rent'>Rent</a>
          <a href='/'>sell</a>
          <a href='/'>ManageProperty</a>
          <a href='/'>Resources</a>
      </div>

      <div className='login_singup'>
        <a href="/">login</a>
        <a href="/">signup</a>
      </div>

    </nav>
  )
}

export default Navbar;