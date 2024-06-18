
const ItemList=(props)=>{
    
    console.log(props);
    const items=props?.itemCategory?.card?.card?.itemCards;
    //console.log(items);
    return(
        <div className="">
            {items.map((item)=>{
                return( <div>
                            <div key={item?.card?.info?.id}>
                                <span>{item?.card?.info?.name}</span>
                                <p>{item.card.info.price?item?.card?.info?.price/100:item?.card?.info?.defaultprice/100} /-</p>
                            </div> 
                              
                        </div>
                    )
            })}
            {/* <span>{props?.itemCategory?.card?.card?.itemCards[0]?.card?.info?.name}</span> */}
        </div>
    )
    
}

export default ItemList;