import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Link to="/">
                <h3>헤더입니다</h3>
            </Link>
        </>
    );
}

export default Header;