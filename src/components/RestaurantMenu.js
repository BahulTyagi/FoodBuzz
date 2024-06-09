import { useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
const RestaurantMenu=()=>{

    const[resName, setResName]=useState("");
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        let data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        data=await data.json();
      setResName(data?.data?.cards[2]?.card?.card?.info?.name);
    }
return resName?(<><h1>{resName}</h1></>):(
    <Shimmer/>
)
}

export default RestaurantMenu