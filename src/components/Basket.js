import React from "react";
import Product from "./Product";

function Basket({products})
{
    return(
        <div className = "basket">
            {products.map(t=> (
                <article key = {t.id}>
                    <Product product = {t}/>
                </article>
            ))}
        </div>
    )


}

export default React.memo(Basket);