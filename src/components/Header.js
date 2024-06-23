import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";


const Header=()=>{
  // const status=useOnlineStatus();
  // if(!status)
  //   {
  //     return(
  //       <h1>Looks like you are offline..!</h1>
  //     )
  //   }
const cartItems=useSelector((store)=>store.cart.items);
const {loggedInUser}=useContext(UserContext);

    return (
      <div className="header">
        
        <div id="logo">
          <img id="image" alt="Logo" src={CDN_LOGO}></img>
        </div>
  
        <div id="navitems">
          <ul>
            {/* <li>Online Status - {status?"ON":"OFF"}</li> */}
            <li><Link to="/" className="header-items">Home</Link></li>
            <li> <Link to="/about" className="header-items">About Us</Link></li>
            <li> <Link to="/contact" className="header-items">Contact Us</Link></li>
            <li> <Link to="/cart" className="header-items">Cart {cartItems?.length}</Link></li>
            <li> <Link to="/grocery" className="header-items">Grocery</Link></li>
            <li> <a className="header-items">{loggedInUser}</a></li>
          </ul>
        </div>
  
      </div>
    )
  };

  export default Header;