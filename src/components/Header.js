import { CDN_LOGO } from "../utils/constants";

const Header=()=>{
    return (
      <div className="header">
        
        <div id="logo">
          <img id="image" src={CDN_LOGO}></img>
        </div>
  
        <div id="navitems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
  
      </div>
    )
  };

  export default Header;