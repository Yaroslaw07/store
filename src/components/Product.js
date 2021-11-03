import React from "react";


function Product({product}){
    
    return(
       <div class = "productCard">
           <div class="product-image">
                <img src= {product.image} alt=""/>
            </div>
            <div class="product-title">{product.title}</div>
            <div class="product-price">
                <span>{product.price}</span> грн.
            </div>
       </div>
    )
        
}

export default React.memo(Product);