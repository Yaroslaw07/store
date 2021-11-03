import React from "react";
import ProductCard from "./ProductCard";

function ProductList({products, add}){
    return(
        <div className = "store">
            {products.map(t=> (
                <article key = {t.id}>
                    <ProductCard product={t} add = {add}/>
                </article>
            ))}
        </div>
    )
}

export default React.memo(ProductList);