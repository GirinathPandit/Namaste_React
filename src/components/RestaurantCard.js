import {DOM_LINK} from "../utils/constants"
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} = resData?.info;
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="p-4 m-4 w-62.5" style ={styleCard}>
            <img 
                className="rounded-lg"
                alt="res-logo" 
                src={DOM_LINK + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} star</h5>
            <h5>{sla.deliveryTime} mins</h5>
            <h5 className="font-bold">Logged in as: {loggedInUser}</h5>
        </div>
    )
}

export const WithPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;