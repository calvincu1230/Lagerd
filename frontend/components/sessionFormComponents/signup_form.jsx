import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
        firstName: "",
        lastName: "",
        birthDate: ""
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
        const errors = this.props.errors.map(error => {
            return <li key={{ errors: error }}>{error}</li>
        });
        return (
            <div className={this.props.formType}>
                <ul>{errors}</ul>
                <form onSubmit={this.handleSubmit}>
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
                            type="passwordCheck" 
                            placeholder="Repeat Password"
                            value={this.state.passwordCheck} 
                            onChange={this.handleChange("passwordCheck")}
                        />
                    </div>
                    <div className="signup-form signup-firstname">
                        <input 
                            type="text" 
                            placeholder="First Name"
                            value={this.state.firstName} 
                            onChange={this.handleChange("firstName")}
                        />
                    </div>
                    <div className="signup-form signup-lastname">
                        <input 
                            type="text" 
                            placeholder="Last Name"
                            value={this.state.firstName} 
                            onChange={this.handleChange("lastName")}
                        />
                    </div>
                    <div className="signup-form signup-birthday">
                        <label>Birthday:
                            <input 
                                type="date" 
                                value={this.state.birthDate} 
                                onChange={this.handleChange("birthDate")}
                            />
                        </label>
                    </div>
                    <button className="signup-sub-btn">Create Account</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;