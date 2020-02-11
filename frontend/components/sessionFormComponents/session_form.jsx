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

    render() {
        const formUrl = this.props.formType === "Log In" ? "signup" : "login";
        // const errors = this.props.errors.map(error => {
        //     return <li>{error}</li>
        // });
        const otherForm = formUrl === "login" ? "Sign Up" : "Log In";
        return (
            <div className={this.props.formType}>
                {/* <ul>{errors}</ul> */}
                <form onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange("username")}
                        />
                    </label>

                    <label>Password: 
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange("password")}
                        />
                    </label>

                    <button>{this.props.formType}</button>
                    <p>New around here? <Link to={`/${formUrl}`}>{otherForm}!</Link></p>
                </form>
            </div>
        );
    }
}

export default SessionForm;