import { useEffect, useState } from "react";
import {LOGO_LINK} from "../utils/constants";
import {Link} from "react-router"
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header rendered");

    /*useEffect}(()=>{
        console.log("UseEffect Called");
    });*/

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src= {LOGO_LINK}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="Login" onClick={() => {btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");}}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;