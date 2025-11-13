import {DOM_LINK} from "../utils/constants"


const styleCard = {
    backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} = resData?.info;
    return(
        <div className="res-card" style ={styleCard}>
            <img 
                className="res-card-logo"
                alt="res-logo" 
                src={DOM_LINK + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} star</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard;