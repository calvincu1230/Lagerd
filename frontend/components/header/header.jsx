import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
    const logoutBtn = <button onClick={props.logout}>Log Out!</button>
    const logoutLink = props.currentUser ? logoutBtn : null;
    return (
        <header className="header-main">
            <div className="header-title-div">
                <h2 className="header-title"><Link className="header-title-link" to="/">Lagerd</Link></h2>
                <h3 className="header-sub-title">Drink Socially</h3>
            </div>
            <div className="logout-btn">
                {logoutLink}
            </div>
        </header>
    );
};

export default Header;