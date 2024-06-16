import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{
  // const status=useOnlineStatus();
  // if(!status)
  //   {
  //     return(
  //       <h1>Looks like you are offline..!</h1>
  //     )
  //   }
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
            <li> <Link to="/cart" className="header-items">Cart</Link></li>
            <li> <Link to="/grocery" className="header-items">Grocery</Link></li>
          </ul>
        </div>
  
      </div>
    )
  };

  export default Header;