import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{



const[listOfRestaurant, setListOfRestaurants]=useState([]);
const[filteredRestaurants, setFilteredRestaurants]=useState([]);

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
    setFilteredRestaurants(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRestaurant.length===0?<Shimmer/>:
    (
      <div className="body">
        
        <div className="filter">

          <input type="text" className="searchbar" value={searchText} onChange={e=>{
                                                                                    let val=e.target.value;
                                                                                    setSearchText(val);
                                                                                    val?setFilteredRestaurants(listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(val.toLowerCase()))):setFilteredRestaurants(listOfRestaurant);
                                                                                    }}/>
          <button className="search filter-btn" onClick={()=>{
            console.log("List is :"+listOfRestaurant.toString());
            setFilteredRestaurants(listOfRestaurant.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
          }}>Search</button>
        

          <button 
          onClick={()=>{
            setFilteredRestaurants(listOfRestaurant.filter((res)=>res.info["avgRating"]>=4));
          }}
          className="filter-btn">Top Rated Restaurants</button>
        </div>
        
        <div className="res-container">
          {
            filteredRestaurants.map(restaurant=><Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} ><RestaurantCard resName={restaurant.info.name} image_id={restaurant.info.cloudinaryImageId}/></Link>)
          }
       </div>
  
      </div>
    )
  }

  export default Body;