import React from "react";

const Header = props => {
    const logoutBtn = <button onClick={props.logout}>Log Out!</button>
    const logoutLink = props.currentUser ? logoutBtn : null;
    return (
        <header className="splash-header">
            <h1 className="header-title">Lagerd</h1>
            <div className="logout-btn">
                {logoutLink}
            </div>
        </header>
    );
};

export default Header;