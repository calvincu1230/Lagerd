import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    } // prob dont need constructor, prob just func comp

    render() {
        const logoutBtn = <button onClick={this.props.logout}>Log Out!</button>
        const logoutLink = this.props.currentUser ? logoutBtn : null;
        return (
            <header className="splash-header">
                <h1 className="header-title">Lagerd</h1>
                <div className="logout-btn">
                    {logoutLink}
                </div>
            </header>
        )
    }
}

export default Header;