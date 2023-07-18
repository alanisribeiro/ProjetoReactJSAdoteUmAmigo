import React from 'react'
import logo from "../../../img/logo.png"
import {Link} from "react-router-dom"
import {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineAppstore} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import {MdPets} from "react-icons/md";




const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 200)
    })
  return (
    <>
        <header className="header">
            <div className="container flex">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav">
                    <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pages">Abrigo</Link></li>
                        <li><Link to="/blog">Voluntários</Link></li>
                        <li><Link to="/portfolio">Doações</Link></li>
                        <li><Link to="/shop">Adoção</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <li className='icon'>
                            <AiOutlineSearch className='HeaderIcon'/>
                            <MdPets className='HeaderIcon'/>
                            <AiOutlineAppstore  className='HeaderIcon'/>
                        </li>
                    </ul>
                </div>
                <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
                 {sidebar ? <AiOutlineClose/> : <AiOutlineMenu/>}
                </button>
            </div>
        </header>
    </>
  )
}

export default Header