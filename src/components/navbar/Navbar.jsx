import { useState } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../pages/home/Home'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className='navbar'>
        <div className='logo'>
            <h1><Link to="/home" onClick={toggleMenu}>Coin Metrics</Link></h1>
            <p>Cryptocurrencies</p>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="/cryptocurrencies" onClick={toggleMenu}>Cryptocurrencies</Link></li>
            <li><Link to="/learn" onClick={toggleMenu}>Learn</Link></li>
            <li><Link to="/developer" onClick={toggleMenu}>Developer</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        </ul>

        <div className='hamburger' onClick={toggleMenu}>
            {isOpen ? (
                <FaTimes size={30} color="white" />
            ) : (
                <FaBars size={30} color="white" />
            )}
        </div>
    </nav>
  )
}

export default Navbar;