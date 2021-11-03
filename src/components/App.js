import React, { useState } from "react";
import Basket from "./Basket";
import ProductList from "./ProductList";
import './App.css';

function App() {
    const [products, setProducts] = useState([{
        id: 1,
        title: "Чашка",
        price: 249.0,
        image: "https://gifty.in.ua/public/cache/images/2/0/0/5/6/e45c88cab5fe5b7cb1e5819c65f86a15_900_700.jpg",
    }, {
        id: 2,
        title: "Футболка",
        price: 100,
        image: "https://img.loveandlive.ua/r/wU4a_LUWON4/fit/640/640/ce/1/plain/images/products/1/5689/356972089/MNK__ZZ3-04314M.00P-20_.jpg",
    }, {
        id: 3,
        title: "Плед",
        price: 350,
        image: "https://textile-alvit.org/image/cache/catalog/pledyipokryvala/poloska/1405-39-1000x1340.jpg",
    }, {
        id: 4,
        title: "Блокнот",
        price: 150,
        image: "https://gifty.in.ua/public/cache/images/6/1/6/4/b90f8428c3cb590dc7c7847b36f14e36_900_700.jpg",
    }, {
        id: 5,
        title: "Календар",
        price: 100,
        image: "https://gifty.in.ua/public/cache/images/8/5/6/7/5/d926f57c8e6153cbfa1fd5c3e753b3fc_600_1800.jpg",
    }]);

    const [basket, setBasket] = useState([]);
    const [unique,setUnique]= useState([]);

    function AddToBasket(product)
    {
        if(!unique.includes(product.id)){
            setBasket([...basket,product]);
            setUnique([...unique,product.id]);
        }

    }

    return ( 
        <div className = "App" >
            <ProductList products = {products} add = {AddToBasket}/>
            <hr/>
            <div class = "basket">
            <Basket products = {basket}/>
            </div>
            
        </div>
    );
}

export default App;