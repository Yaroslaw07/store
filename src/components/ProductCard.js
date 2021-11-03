import React from "react";
import Product from "./Product";
import AddButton from "./AddButton";

function ProductCard({product,add}){
    return(
    <div className = "product">
        <Product product = {product}></Product>
        <AddButton action = {add} item = {product}></AddButton>
    </div>
    )
}

export default React.memo(ProductCard);