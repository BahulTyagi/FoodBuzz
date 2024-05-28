import RestaurantCard from "./RestaurantCard";

const Body=(props)=>{
    return(
      <div className="body">
        
        <div className="Search">
          Search
        </div>
        
        <div className="res-container">
          {
            props.resData.restaurants.map(restaurant=><RestaurantCard resName={restaurant.info.name} image_id={restaurant.info.cloudinaryImageId}/>)
          }
       </div>
  
      </div>
    )
  }

  export default Body;