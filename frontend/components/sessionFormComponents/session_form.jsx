import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.loginDemoUser();
    }

    render() {
        const errors = this.props.errors.map(error => {
            return <li key={{ errors: error }} className="errors-li">{error}</li>
        });
        return (
            <div className="session-form-container">
                <h2 className="session-form-title">Lagerd</h2>
                <button className="demo-login-btn" onClick={this.handleDemoUser}> Demo User</button>
                <div className="or">or</div>
                <ul className="errors-list">{errors}</ul>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <div className="session-form-username session-ele">
                        <p className="username-input-img"></p>
                        <input 
                            className="session-input"
                            type="text" 
                            value={this.state.username}
                            placeholder="Username"
                            onChange={this.handleChange("username")}
                        />
                    </div>

                    <div className="session-form-username session-ele">
                        <p className="password-input-img"></p>
                        <input
                            className="session-input"
                            type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleChange("password")}
                        />
                    </div>

                    <button className="session-ele session-submit-btn">Sign In</button>
                    <p className="session-bottom">New around here?    <Link to="/signup"                  className="orange-link">Create an Account!</Link></p>
                </form>
            </div>
        );
    }
}

export default SessionForm;