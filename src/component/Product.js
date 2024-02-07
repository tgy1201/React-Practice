import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    const {id} = useParams()
    return (
        <>
            <h3>{id}번 상품</h3>
        </>
    );
}

export default Product;