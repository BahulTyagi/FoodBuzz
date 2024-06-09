import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header=()=>{
    return (
      <div className="header">
        
        <div id="logo">
          <img id="image" src={CDN_LOGO}></img>
        </div>
  
        <div id="navitems">
          <ul>
            <li><Link to="/" className="header-items">Home</Link></li>
            <li> <Link to="/about" className="header-items">About Us</Link></li>
            <li> <Link to="/contact" className="header-items">Contact Us</Link></li>
            <li> <Link to="/cart" className="header-items">Cart</Link></li>
          </ul>
        </div>
  
      </div>
    )
  };

  export default Header;