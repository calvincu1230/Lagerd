import React from "react";
import { Link } from "react-router-dom";

const Header = props => {

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

                <div className="add-beer-div header-link">
                    <Link className="header-add-beer-link " to="/beers/new">Add a Beer</Link>
                </div>
            </div>
            {/* PUT PROFILE PICTURE HERE WITH DROPDOWN FOR LOGOUT */}
            <div className="profile-pic">
                <img className="current-user-photo" src={props.user.imgUrl} />
                <div className="dropdown-arrow"></div>
                <ul className="header-dropdown">
                    <Link to={`/users/${props.currentUser}`}><li>My Profile</li></Link>
                    <li onClick={props.logout}>Logout</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;