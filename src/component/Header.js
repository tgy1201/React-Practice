import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img src="/logo192.png" width="50px" />
                </Link>
                <nav className="navigation">
                    <ul>
                        <li>
                            <h4>메뉴1</h4>
                        </li>
                        <li>
                            <h4>메뉴2</h4>
                        </li>
                        <li>
                            <h4>메뉴3</h4>
                        </li>
                        <li>
                            <h4>메뉴4</h4>
                        </li>
                        <li>
                            <h4>메뉴5</h4>
                        </li>
                    </ul>
                </nav>
                <div className="nav">
                    <ul>
                        <li>
                            <h4>로그인</h4>
                        </li>
                        <li>
                            <h4>회원가입</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;