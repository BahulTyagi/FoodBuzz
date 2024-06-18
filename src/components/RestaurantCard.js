import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    return(
      <div className="res-card">
        <img className="res-logo" src={CDN_URL+props.image_id} />
        <h3>{props.resName}</h3>
      </div>
    )
  }


 export const OpenedRestaurant=(RestaurantCard)=>{
    return (props)=>{
      return(
        <>
        <label className="newBanner">Newly Added</label>
        <RestaurantCard {...props}/>
        </>
      )
    }
  } 

export default RestaurantCard;