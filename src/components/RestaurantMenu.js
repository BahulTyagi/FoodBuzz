import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu=()=>{

    const [showIndex,setShowIndex]=useState(0);

    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    if(resInfo==null) return <Shimmer/>;
        
    const {name, costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const categories=(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=> x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

return (
            <>
            <h1 className="resInfo">{name}</h1>
            <p className="resInfo">{costForTwoMessage}</p>

            {categories?categories.map((category,index)=><RestaurantCategory key={category?.itemCategory?.card?.card?.title} itemCategory={category} showIndex={showIndex===index?true:false} setShowIndex={()=>setShowIndex(index)}/>):null}
            
            </>
        )
}

export default RestaurantMenu