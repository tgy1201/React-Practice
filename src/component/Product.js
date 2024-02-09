import React from "react";
import { Link, useParams } from "react-router-dom";

function Product({product}) {

    return (
        <div className="container">
            <l1>
                <Link to={`/detail/${product.id}`}>
                    <div>
                        <img src={product.image}/>
                    </div>
                    <div className="product_name">{product.name}</div>
                    <div>{product.price}원</div>
                </Link>
            </l1>
        </div>
        
    );
}

export default Product;