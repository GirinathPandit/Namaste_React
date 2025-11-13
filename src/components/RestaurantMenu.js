import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router"
import { MENU_LINK } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);   
    const {resId} = useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(MENU_LINK + resId);
        const json = await data.json();
        setResInfo(json?.data);
        //console.log("useeffect called");
        //console.log(resInfo);
        //console.log(json);
    };
    //console.log(resInfo);
    //console.log("Menu Rendered");
    if(resInfo ===null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return( 
        
        <div className="Menu">
            <h1>{name} - {avgRating}*</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu:</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;