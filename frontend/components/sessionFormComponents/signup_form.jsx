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
            <div className="signup-form-container">
                <div class="signup-content">
    
                    <h2 className="signup-form-title">Lagerd</h2>
                    <h3 className="signup-sub-title">Drink Socially</h3>
                    <ul className="errors-list">{errors}</ul>
                    <strong className="">All fields below are required.</strong>
                    <form onSubmit={this.handleSubmit} className="signup-form">
                        
                        <div className="signup-row email-username">

                            <div className="signup-form signup-username signup-div">
                                <p className="username-input-img"></p>
                                <input 
                                    type="text" 
                                    className="signup-input"
                                    placeholder="Username"
                                    value={this.state.username} 
                                    onChange={this.handleChange("username")}
                                />
                            </div>
                            <div className="signup-form signup-email signup-div">
                                <p className="email-input-img"></p>
                                <input 
                                    type="email"
                                    className="signup-input"
                                    placeholder="Email Address"
                                    value={this.state.email} 
                                    onChange={this.handleChange("email")}
                                />
                            </div>

                        </div>
                        <p className="password-suggestion">Avoid using common words and include a mix of letters and numbers.</p>
                        
                        <div className="signup-row passwords">

                            <div className="password-inputs">
                                <div className="signup-form signup-password">
                                    <p className="password-input-img"></p>
                                    <input 
                                        type="password" 
                                        className="signup-input"
                                        placeholder="Password"
                                        value={this.state.password} 
                                        onChange={this.handleChange("password")}
                                    />
                                </div>
                                <div className="signup-form signup-password password-check">
                                    <p className="password-input-img"></p>
                                    <input 
                                        type="password" 
                                        placeholder="Repeat Password"
                                        className="signup-input"
                                        value={this.state.passwordCheck} 
                                        onChange={this.handleChange("passwordCheck")}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="signup-row firstname-lastname">

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

                        </div>
                        <div className="signup-row signup-form signup-birthday">
                            <label>Birthday:
                                <input 
                                    type="date" 
                                    value={this.state.birth_date} 
                                    onChange={this.handleChange("birth_date")}
                                />
                            </label>
                        </div>
                            <p className="signup-bottom">
                            Already have an account?<Link to="/login" className="orange-link spacer-class">Log In!</Link>
                            </p>
                        <button type="submit" className="signup-sub-btn">Create Account</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;