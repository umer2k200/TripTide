import React, {useState} from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'; // Import the MdOutlineTravelExplore component
import './Navbar.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [active,setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <header className="header Flex">
                <div className="logoDiv">
                    <a href="/" className="logo Flex">
                        <h1>
                            <MdOutlineTravelExplore className="icon" />
                            TripTide .</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="home" className="navLink">Home</Link>
                        </li>
                        <li className="navItem">
                            <Link to="main" className="navLink">Packages</Link>
                        </li>
                        <li className="navItem">
                            <Link to="main" className="navLink">Shop</Link>
                        </li>
                        <li className="navItem">
                            <Link href="/" className="navLink">About</Link>
                        </li>
                        <li className="navItem">
                            <Link href="/" className="navLink">Pages</Link>
                        </li>
                        <li className="navItem">
                            <Link href="/" className="navLink">News</Link>
                        </li>
                        <li className="navItem">
                            <Link to="footer" className="navLink">Contact</Link>
                        </li>

                        <button className="btn">
                            <Link to="footer">BOOK NOW</Link>
                        </button>
                    </ul>

                    <div className="closeNavbar" onClick={removeNavbar}>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

                <div className="toggleNavbar" onClick={showNav}>
                    <TbGridDots className='icon'/>
                </div>
            </header>
        </section>
    )
}

export default Navbar
