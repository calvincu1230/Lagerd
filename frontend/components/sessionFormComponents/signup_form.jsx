import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
        image_url: "",
        first_name: "",
        last_name: "",
        birth_date: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.birth_date === ""){
            this.props.dispatchErrors(["Please Enter a Valid Date."]);
            // if date is empty on submit, add error
        } else if (this.state.password === this.state.passwordCheck) {
            this.props.action(this.state);
            // if both password entries match, submit
        } else {
            this.props.dispatchErrors(["Passwords must match!"]);
        }
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        const errors = this.props.errors.map(error => {
            return <li key={error} className="errors-li">{error}</li>
        });
        return (
            <div className="outer-sign-up-form">
                <h2 className="form-title">Lagerd</h2>
                <ul className="errors-list">{errors}</ul>
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="signup-form signup-username">
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={this.state.username} 
                            onChange={this.handleChange("username")}
                        />
                    </div>
                    <div className="signup-form signup-email">
                        <input 
                            type="email"
                            placeholder="Email Address"
                            value={this.state.email} 
                            onChange={this.handleChange("email")}
                        />
                    </div>
                    <div className="signup-form signup-password">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={this.state.password} 
                            onChange={this.handleChange("password")}
                        />
                    </div>
                    <div className="signup-form signup-password password-check">
                        <input 
                            type="password" 
                            placeholder="Repeat Password"
                            value={this.state.passwordCheck} 
                            onChange={this.handleChange("passwordCheck")}
                        />
                    </div>
                    <div className="signup-form signup-firstname">
                        <input 
                            type="text" 
                            placeholder="First Name"
                            value={this.state.first_name} 
                            onChange={this.handleChange("first_name")}
                        />
                    </div>
                    <div className="signup-form signup-lastname">
                        <input 
                            type="text" 
                            placeholder="Last Name"
                            value={this.state.last_name} 
                            onChange={this.handleChange("last_name")}
                        />
                    </div>
                    <div className="signup-form signup-birthday">
                        <label>Birthday:
                            <input 
                                type="date" 
                                value={this.state.birth_date} 
                                onChange={this.handleChange("birth_date")}
                            />
                        </label>
                        Already have an account? <Link to="/login" className="orange-link">Log In!</Link>
                    </div>
                    <button type="submit" className="signup-sub-btn">Create Account</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;