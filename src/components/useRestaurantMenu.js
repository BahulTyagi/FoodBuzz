import { useState, useEffect } from "react";
import { MenuAPI } from "../utils/constants";

const useRestaurantMenu=(resId)=>{

    const[resInfo, setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const res=await fetch(`${MenuAPI}&restaurantId=${resId}`);
        const data=await res.json();
        console.log("DATA RECD:"+JSON.stringify(data))
        setResInfo(data?.data);
       };

    return resInfo;
}

export default useRestaurantMenu;