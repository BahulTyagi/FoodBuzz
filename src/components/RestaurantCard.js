import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    return(
      <div className="res-card">
        <img className="res-logo" src={CDN_URL+props.image_id} />
        <h3>{props.resName}</h3>
      </div>
    )
  }


 export const OpenedRestaurant=(RestaurantCard)=>{
  const{loggedInUser}=useContext(UserContext);
    return (props)=>{
      
      return(
        <>
        <label className="newBanner">Newly Added by {loggedInUser}</label>
        <RestaurantCard {...props}/>
        </>
      )
    }
  } 

export default RestaurantCard;