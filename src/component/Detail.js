import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [product, setProducts] = useState([])

    useEffect(()=> {
        axios.get('/data/products.json').then((a)=>{
            setProducts(a.data.products.find((p)=> p.id === parseInt(id)));
        });
    }, [id]);

    return(
        <div>
            <div>
                <img src={product.image}/>
            </div>
            <div className="product_name">{product.name}</div>
            <div>{product.price}원</div>
        </div>
    );
}

export default Detail;