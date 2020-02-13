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

    componentWillUnmount() {
        this.props.clearErrors();
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
        const errors = this.props.errors;
        const showErrors = Boolean(errors) && errors.length > 0 ? "show-errors" : "";
        const currentErrors = errors.map(error => {
            return <li key={error} className="errors-li">{error}</li>
        });
        return (
            <div className="signup-form-container">
                <div className="signup-content">
    
                    <h2 className="signup-form-title">Lagerd</h2>
                    <h3 className="signup-sub-title">Drink Socially</h3>
                    <ul className={`errors-list ${showErrors}`}>{currentErrors}</ul>
                    <strong className="required-fields">All fields below are required.</strong>
                    <form onSubmit={this.handleSubmit} className="signup-form">

                            <div className="signup-form signup-div">
                            
                                <div className="input-picture-signup signup-username">
                                    <p className="username-input-img"></p>
                                </div>

                                <input 
                                    type="text" 
                                    className="signup-input"
                                    placeholder="Username"
                                    value={this.state.username} 
                                    onChange={this.handleChange("username")}
                                />
                            </div>
                            <div className="signup-form signup-div">
                                <div className="input-picture-signup signup-email">
                                    <p className="email-input-img"></p>
                                 </div>
                                <input 
                                    type="email"
                                    className="signup-input"
                                    placeholder="Email Address"
                                    value={this.state.email} 
                                    onChange={this.handleChange("email")}
                                />
                            </div>

                        <p className="password-suggestion">Avoid using common words and include a mix of letters and numbers.</p>
                    
                        <div className="signup-form signup-password signup-div">
                            
                            <div className="input-picture-signup signup-pw">
                                <p className="password-input-img"></p>
                            </div>

                            <input 
                                type="password" 
                                className="signup-input"
                                placeholder="Password"
                                value={this.state.password} 
                                onChange={this.handleChange("password")}
                            />
                        </div>
                        <div className="signup-form signup-password password-check signup-div">

                            <div className="input-picture-signup signup-pw">
                                <p className="password-input-img"></p>
                            </div>
                            <input 
                                type="password" 
                                placeholder="Repeat Password"
                                className="signup-input"
                                value={this.state.passwordCheck} 
                                onChange={this.handleChange("passwordCheck")}
                            />
                        </div>

                        <div className="signup-firstname signup-div">
                            <input 
                                type="text" 
                                className="signup-input"
                                placeholder="First Name"
                                value={this.state.first_name} 
                                onChange={this.handleChange("first_name")}
                                />
                        </div>
                        <div className="signup-lastname signup-div">
                            <input 
                                type="text" 
                                className="signup-input"
                                placeholder="Last Name"
                                value={this.state.last_name} 
                                onChange={this.handleChange("last_name")}
                                />
                        </div>

                        <div className="signup-row signup-birthday signup-div">     
                            <p className="birthday-text">Birthday:</p>
                                <input 
                                    type="date" 
                                    className="signup-input"
                                    value={this.state.birth_date} 
                                    onChange={this.handleChange("birth_date")}
                                />
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