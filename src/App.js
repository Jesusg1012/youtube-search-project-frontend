import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './Components/LoginForm'
import Signup from './Components/SignupForm'
import YTSearch from 'youtube-api-search'
import HomeContainer from './Containers/HomeContainer'
import './App.css';




const API_KEY=process.env.REACT_APP_KEY

class App extends Component {
  state = {
    currentUser: {},
    videos: []
    
  }

  handleSearchSubmit = (term) => {
      console.log(term)
      console.log(typeof API_KEY)
      YTSearch({key: API_KEY, term: term}, videos => {
        this.setState({
              videos :videos,
            })
      })

  }

  handleSignup = (userObj)=>{
      fetch("http://localhost:4000/users", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({user:{
          first_name: userObj.first_name,
          last_name: userObj.last_name,
          user_name: userObj.user_name,
          user_email: userObj.email,
          password: userObj.password
        }})
      }).then(res => res.json)
      .then(json => console.log)
  }

  handleLogin = (userObj) => {
    console.log(userObj)
  }

  render() {
    // console.log(this.state.videos)
    return (
      <div className="App">
          <Switch>
              <Route path ='/login' render={()=> <Login handleSubmit={this.handleLogin}/>} />
              <Route path ='/signup' render={()=> <Signup handleSubmit={this.handleSignup}/>} />
              <Route path ='/' render={()=> <HomeContainer videos={this.state.videos} handleSearch={this.handleSearchSubmit}/>} />
          </Switch>
      </div>
    );
  }
}

export default App;
