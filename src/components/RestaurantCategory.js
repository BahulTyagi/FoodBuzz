import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory=(props)=>{

    const[showItems, setShowItems]=useState(false);

    const handleOnClick=()=>{
        setShowItems(!showItems);
    }

    return(
        <>
        <div className="Accordian" onClick={handleOnClick}>
        <span>{props.itemCategory.card.card.title}</span>
        <span>🔽</span>
        </div>
        <div className="resMenu">
        {showItems && <ItemList itemCategory={props.itemCategory}/>}
        </div>
        </>
    )
}

export default RestaurantCategory;