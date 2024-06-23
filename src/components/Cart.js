import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart=()=>{
 const cartItems=useSelector((store)=>store.cart.items);
return(
    <>
    <ItemList itemCategory={cartItems}/>;
     {/* <ItemList itemCategory={cartItems[0]}/> */}
    </>
)

}

export default Cart;