import React, {useState} from "react";
import { Link } from "react-router-dom";

function Main() {
    const [번호, 번호변경] = useState([1,2,3]);
    return (
        <>
            {번호.map(bh =>
                <Link to={`/product/${bh}`}>{bh}<br /></Link>
            )}
            
        </>
    );
}

export default Main;