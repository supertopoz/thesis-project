import React from 'react';
import firebase from 'firebase';

class ManualUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      messages: 'No messages yet',
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleLogin(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      .then((value) => {
        console.log(value.uid);
      })
      .catch(error => console.log(`Opps. We are sorry to say: ${error.message}`));
  }

  handleSignup(event) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then((value) => {
        console.log(value);
        this.setState({ messages: `A verification email has been sent to: ${event.target.value.email}` });
      })
      .catch((error) => {
        this.setState({ messages: `Opps. We are sorry to say: ${error.message}` });
      });
  }
  render() {
    return (
      <div>
        <form >
          <div className="manual-login">
            <div className="email-form">
            <label><b>Email</b></label>
            <input
              className="login-input"
              name="email"
              type="email"
              value={this.state.username}
              onChange={this.handleUsername}
              required />
            </div>
            <div className="password-form">
            <label htmlFor="password"><b>Password</b></label>
            <input className="login-input"
              type="password"
              autoComplete="new-password"
              value={this.state.password}
              onChange={this.handlePassword}
              required
             />
           </div>
           <div className="button-wrapper">
             <button className="button button-login"onClick={ this.handleLogin }  >Login</button>
             <button className="button button-signup"onClick={ this.handleSignup } >Sign Up</button>
            </div>
          </div>
          </form>
        </div>
    );
  }
}
export default ManualUser;