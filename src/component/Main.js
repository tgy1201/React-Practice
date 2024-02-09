import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import Product from "./Product";
import Banner from "./Banner";

function Main({products, setProducts}) {
    useEffect(()=> {
        axios.get("/data/products.json").then((a)=>{
            setProducts(a.data.products)
        })
    }, [setProducts]);

    return (
        <>
        <Banner />
        <div className="product">
            <ul>
                {products.map((product) => 
                    <Product key={product.id} product={product}/>
                )}
            </ul>
        </div>
        </>    
    );
}

export default Main;