import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
//import { resList } from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import { RESTAURANT_LINK } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () =>{
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

    //console.log("Body rendered", listOfRestaurants);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LINK);
        const json = await data.json();       
         //console.log(json);
        setListOfRestaurant(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(listOfRestaurants);
        //console.log("useeffect called");
    };
  
    const isOnline = useOnlineStatus();

    if(!isOnline){
        return <h1>🔴 Offline, Please check your internet connection!!</h1>
    }
    //console.log("Body rendered");
    //console.log(listOfRestaurants);
    //Conditional Rendering

    const {loggedInUser, setUserName} = useContext(UserContext);
    
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 px-4">
                    <input type="text" className="border border-solid border-gray-300" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button className="px-4 py-2 m-4 bg-blue-500 text-white rounded" onClick={() => {
                        //console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 px-4 flex items-center">
                <button className="px-4 py-2 m-4 bg-blue-500 text-white rounded" onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                        //console.log(filteredList);
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                    Top Rated Restaurants
                </button>
                </div>
                <div className="search m-4 p-4 px-4 flex items-center">
                    <label>UserName : </label>
                    <input className="border border-black p-2"
                        value = {loggedInUser}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((info)=>(
                    <Link key={info.info.id} to={"/restaurant/" + info.info.id}>
                        {
                            info.info.avgRating > 4.5 ? <RestaurantCardPromoted resData={info}/> : <RestaurantCard resData={info}/>
                        }                        
                    </Link>
                ))
                }
            </div>
        </div>
    );
};


export default Body;