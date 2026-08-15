import { useEffect, useState, useContext } from "react";
import {LOGO_LINK} from "../utils/constants";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header rendered");
    const isOnline = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    /*useEffect}(()=>{
        console.log("UseEffect Called");
    });*/
    
    //Subscribing to the store using a selector.
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="logo-container">
                <img 
                    className="w-50"
                    src= {LOGO_LINK}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {isOnline ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">Cart ({cartItems.length} items)</li>
                    <button className=" bg-blue-500 text-white rounded" onClick={() => {btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");}}>
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;