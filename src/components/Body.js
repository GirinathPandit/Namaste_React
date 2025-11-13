import RestaurantCard from "./RestaurantCard";
//import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import { RESTAURANT_LINK } from "../utils/constants";

const Body = () =>{
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LINK);
        const json = await data.json();        
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(listOfRestaurants);
        //console.log("useeffect called");
    };
    //console.log("Body rendered");
    //console.log(listOfRestaurants);
    //Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button className="search-btn" onClick={() => {
                        //console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                        //console.log(filteredList);
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((info)=>(
                    <Link key={info.info.id} to={"/restaurant/" + info.info.id}><RestaurantCard resData={info}/></Link>
                ))
                }
            </div>
        </div>
    );
};


export default Body;