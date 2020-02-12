import React from "react";
import { Link } from "react-router-dom";

export default () => {

    return (
        <footer className="splash-footer">
          <ul className="link-list">
           <li className="github-link foot-link"><Link to="https://github.com/calvincu1230/Lagerd">Github</Link></li>
           <li className="linkedin-link foot-link"><Link to="https://www.linkedin.com/in/calvin-curnuck-7139a7a8/">LinkedIn</Link></li>
          </ul>
        </footer>
    );
};