//react header component with just logo in centre

import React from "react";
import "./Header.css";
import logo from "../../assets/pic.jfif";

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
            </div>
        </>
    );
}
export default Header;