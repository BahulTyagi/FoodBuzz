import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
const ItemList=(props)=>{
    
    const dispatch=useDispatch();
    let items=props?.itemCategory?.card?.card?.itemCards;
    
    // below condition is for cart page , we are using itemlist there as well , to show the items in the cart
    if(!items)
        items=props?.itemCategory;
    const handleOnAddClick=(item)=>{
        dispatch(addItem(item))
    }
    const handleOnRemoveClick=(item)=>{
        dispatch(removeItem(item))
    }
    const handleOnClearClick=(item)=>{
        dispatch(clearCart(item))
    }
    //console.log(items);
    return(
        <div className="">
            {items.map((item)=>{
                return( <div>
                            <div className="itemList" key={item?.card?.info?.id}>
                                <span>{item?.card?.info?.name}</span>


                                <p>{item.card.info.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100} /-</p>
                                {/* <p>{item?.card?.info?.description}</p> */}
                                <img className="itemImage" src={CDN_URL+item.card.info.imageId} alt="" />
                                <button className="newBanner" onClick={()=>handleOnAddClick(item)}>Add</button>
                                
                                <button className="" onClick={()=>handleOnRemoveClick(item)}>Remove</button>
                                
                                <button className="" onClick={()=>handleOnClearClick(item)}>Clear</button>
                            
                            </div>
                               {/* <div className="description">
                                <p>{item?.card?.info?.description}</p>
                               </div> */}
                        </div>
                    )
            })}
        </div>
    )
    
}

export default ItemList;