import { useEffect, useState } from "react";
import { MENU_LINK } from "../utils/constants";


const useRestaurantMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("fetchData called");
        const data = await fetch(MENU_LINK + restaurantId);
        console.log(data);
        const json = await data.json();
        setResInfo(json?.data);
    };

    return resInfo;
}

export default useRestaurantMenu;