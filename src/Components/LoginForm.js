import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../style/Login.css'



class LoginForm extends Component{
    state={
        email: '',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            email: '',
            password:''
        })
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

    render(){
        return (
            // <form className="login-form" onSubmit={this.handleSubmit}>
            //     <p>Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/></p>
            //     <p>Password: <input type ="password" name="password" value={this.state.password} onChange={this.handleChange}/></p>
            //     <button>LOG IN</button>
            // </form>


            <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <h1>Log in: </h1>
              <FormGroup controlId="email">
                <FormControl
                  autoFocus
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormControl
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>

        )

        
    }
}

export default LoginForm;