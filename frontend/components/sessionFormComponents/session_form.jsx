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

    componentWillUnmount() {
        this.props.clearErrors();
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
        const errors = this.props.errors;
        const showErrors = Boolean(errors) && errors.length > 0 ? "show-errors" : "";
        const currentErrors = errors.map(error => {
            return <li key={{ errors: error }} className="errors-li">{error}</li>
        });
        
        return (
            <div className="session-form-container">
                <div className="login-content">

                <h2 className="session-form-title"><Link className="login-title-link" to="/">Lagerd</Link></h2>
                <h3 className="session-sub-title">Drink Socially</h3>
                <ul className={`errors-list ${showErrors}`}>{currentErrors}</ul>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <div className="session-form-username session-div">

                        <div className="input-picture-login session-username">
                            <p className="username-input-img"></p>
                        </div>

                        <input 
                            className="session-input"
                            type="text" 
                            value={this.state.username}
                            placeholder="Username"
                            onChange={this.handleChange("username")}
                        />
                    </div>

                    <div className="session-form-username session-div">

                        <div className="input-picture-login session-pw">
                            <p className="password-input-img"></p>
                        </div>

                        <input
                            className="session-input"
                            type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleChange("password")}
                        />
                    </div>

                    <button className="session-div session-submit-btn">Sign In</button>
                    <div className="or">or</div>
                    <button className="demo-login-btn" onClick={this.handleDemoUser}>Demo User</button>
                    <p className="session-bottom">New around here?<Link to="/signup" className="orange-link spacer-class">Sign Up!</Link></p>
                </form>

                </div>
            </div>
        );
    }
}

export default SessionForm;