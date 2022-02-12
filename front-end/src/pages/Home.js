import React, { Component } from "react";
import Cookies from "universal-cookie";

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  signup(e) {
    e.preventDefault();

    const user = {
      name: document.getElementById("s-name").value,
      email: document.getElementById("s-email").value,
      password: document.getElementById("s-password").value
    }

    // send a POSt request to localhost:3001/signup
    fetch(
      "http://localhost:3001/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(body => {
        if (body.success) { alert("Successfully saved user"); }
        else { alert("Failed to save user"); }
      });
  }

  login(e) {
    e.preventDefault();

    const credentials = {
      email: document.getElementById("l-email").value,
      password: document.getElementById("l-password").value
    }

    // Send a POST request
    fetch(
      "http://localhost:3001/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      .then(response => response.json())
      .then(body => {
        if (!body.success) { alert("Failed to log in"); }
        else {
          // successful log in. store the token as a cookie

          const cookies = new Cookies();
          cookies.set(
            "authToken",
            body.token,
            {
              path: "localhost:3001/",
              age: 60*60,
              sameSite: "lax"
            });

            localStorage.setItem("username", body.username);
            alert("Successfully logged in");
        }
      })
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="text" id="s-name" placeholder="Name" />&nbsp;
          <input type="text" id="s-email" placeholder="Email" />&nbsp;
          <input type="password" id="s-password" placeholder="password" />&nbsp;
          <button id="signup" onClick={this.signup}>Sign Up</button>
        </form>

        <h2>Log In</h2>
        <form>
          <input type="text" id="l-email" placeholder="Email" />&nbsp;
          <input type="password" id="l-password" placeholder="password" />&nbsp;
          <button id="login" onClick={this.login}>Log In</button>
        </form>
      </div>
    )
  }
}