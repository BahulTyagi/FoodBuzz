import { useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu=()=>{

    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    if(resInfo==null) return <Shimmer/>;
        
    const {name, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const categories=(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=> x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

return (
            <>
            <h1 className="resInfo">{name}</h1>
            <p className="resInfo">{costForTwoMessage}</p>

            {categories?categories.map(category=><RestaurantCategory itemCategory={category}/>):null}
            
            </>
        )
}

export default RestaurantMenu