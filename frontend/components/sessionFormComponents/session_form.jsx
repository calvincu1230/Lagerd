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
        // const haveErrors = this.props.errors;
        const errors = this.props.errors.map(error => {
            return <li key={{ errors: error }} className="errors-li">{error}</li>
        });
        return (
            <div className="session-form">
                <ul className="errors-list">{errors}</ul>
                <form onSubmit={this.handleSubmit}>
                    <div className="session-form-username">
                        <input 
                            type="text" 
                            value={this.state.username}
                            placeholder="Username"
                            onChange={this.handleChange("username")}
                        />
                    </div>

                    <div className="session-form-username">
                        <input
                            type="password" 
                            value={this.state.password} 
                            placeholder="Password"
                            onChange={this.handleChange("password")}
                        />
                    </div>

                    <button>{this.props.formType}</button>
                    <p>New around here? <Link to="/signup">Create an Account!</Link></p>
                </form>
            </div>
        );
    }
}

export default SessionForm;