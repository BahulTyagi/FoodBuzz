import ItemList from "./ItemList";

const RestaurantCategory=({itemCategory, showIndex, setShowIndex})=>{

    const handleOnClick=()=>{
        setShowIndex();
    }
    
    return(
        <>
            <div className="Accordian" onClick={handleOnClick}>
                <span>{itemCategory.card.card.title}</span>
                <span>🔽</span>
            </div>
            <div className="resMenu">
                {showIndex && <ItemList itemCategory={itemCategory}/>}
            </div>
        </>
    )
}

export default RestaurantCategory;