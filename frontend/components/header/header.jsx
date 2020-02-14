import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
    const logoutBtn = <button onClick={props.logout}>Log Out!</button>
    const logoutLink = props.currentUser ? logoutBtn : null;
    return (
        <header className="header-main sticky">

            <div className="header-links">

                <div className="header-title-div">
                    <h2 className="header-title">
                        <Link className="header-title-link" to="/">Lagerd</Link>
                    </h2>
                    
                    <h3 className="header-sub-title">
                        Drink Socially
                    </h3>
                </div>

                <div className="the-pub-div header-link">
                    <Link className="header-feed-link" to="/feed">The Pub</Link>
                </div>

                <div className="breweries-div header-link">
                    <Link className="header-breweries-link" to="/breweries">Breweries</Link>
                </div>

                <div className="beers-div header-link">
                    <Link className="header-beers-link " to="/beers">Beers</Link>
                </div>
            </div>
            {/* PUT PROFILE PICTURE HERE WITH DROPDOWN FOR LOGOUT */}
            <div className="logout-btn">
                {logoutLink}
            </div>
        </header>
    );
};

export default Header;