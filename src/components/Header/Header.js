import React from 'react';
import "../Header/Header.style.css"
import LOGO from "../../images/LOGO.svg"
import Add from "../../images/add.svg"
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className='nav-bar'>
            <Link to="/"><img src={LOGO} alt="logo"/></Link>
            <Link to="/AddMovie"><img src={Add} alt="add movie"/></Link>
        </div>
     );
}
 
export default Header;