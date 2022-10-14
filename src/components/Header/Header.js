//react header component with just logo in centre

import React from "react";
import "./Header.css";
import logo from "../../assets/final_logo.webp";
import {Link} from "react-router-dom";

const Header = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
    return (
        <>
            <div className="header">
                    <img src={logo} alt="logo" className="logo" onClick={refreshPage}/>
            </div>
        </>
    );
}
export default Header;