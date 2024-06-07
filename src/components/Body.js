import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body=()=>{

const[listOfRestaurant, setListOfRestaurants]=useState([]);

const[searchText, setSearchText]=useState("");

useEffect(()=>{
  fetchData();
  },[])
  
  const fetchData= async()=>
  { 
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res=await data.json();
    console.log(res);
    setListOfRestaurants(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
  }

  return listOfRestaurant.length===0? <Shimmer/>:
    (
      <div className="body">
        
        <div className="filter">

          <input type="text" className="searchbar" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
          <button className="search filter-btn" onClick={()=>{
            console.log("List is :"+listOfRestaurant.toString());
            setListOfRestaurants(listOfRestaurant.filter(res=>res.info.name.includes(searchText)));
          }}>Search</button>
        

          <button 
          onClick={()=>{
            setListOfRestaurants(listOfRestaurant.filter((res)=>res.info["avgRating"]>=4));
          }}
          className="filter-btn">Top Rated Restaurants</button>
        </div>
        
        <div className="res-container">
          {
            listOfRestaurant.map(restaurant=><RestaurantCard key={restaurant.info.id} resName={restaurant.info.name} image_id={restaurant.info.cloudinaryImageId}/>)
          }
       </div>
  
      </div>
    )
  }

  export default Body;