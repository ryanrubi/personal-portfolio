import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './NavBar.css';

const NavBar = () => {
    const [fixed, setFixed] = useState(false);
    const [navStatus, setNavStatus] = useState(false);

    const scrollChange = () => {
        if(window.scrollY >= 10){
            setFixed(true);
        }else {
            setFixed(false);
        }
    };

    window.addEventListener('scroll', scrollChange);

    const openNavBar = () => {
        let nav = document.getElementById("nav");
        let width = window.innerWidth;

        if (!navStatus && width <= 500) {
            nav.style.left = "0";
            setNavStatus(true);
        } 

        if (navStatus && width <= 500) {
            nav.style.left = "-100%";
            setNavStatus(false);
        }

    }

    return (
        <motion.div initial={{ y: -100, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }}>
            <nav className={fixed ? "nav fixed" : "nav"}>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} className={fixed ? "logo fixed" : "logo"}>Ꮢ</Link>
                <button className={fixed ? "nav-btn fixed" : "nav-btn"} onClick={openNavBar}>≡</button>
                <ul className={fixed ? "nav-ul fixed" : "nav-ul"} id="nav">
                    <li><Link to="home" spy={true} smooth={true} offset={0} duration={500} className={fixed ? "nav-li fixed" : "nav-li"} onClick={openNavBar}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={40} duration={500} className={fixed ? "nav-li fixed" : "nav-li"} onClick={openNavBar}>About</Link></li>
                    <li><Link to="services" spy={true} smooth={true} offset={40} duration={500} className={fixed ? "nav-li fixed" : "nav-li"} onClick={openNavBar}>Services</Link></li>
                    <li><NavLink className={fixed ? "nav-li fixed" : "nav-li"} to="/project">Project</NavLink></li>
                </ul>
            </nav>
        </motion.div>
    );
};

export default NavBar;