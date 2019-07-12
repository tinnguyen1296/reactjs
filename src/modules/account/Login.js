import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './index.scss';
import md5 from 'md5';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
    }
    this.myRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    fetch(`http://localhost:5000/api/login?email=${data.email}&password=${data.password}`, {
      method: "get",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data)
    }).then( res => {
      if(!res.ok) {
        return Promise.reject('Some reason');
      }
      return res.json()
    })
      .then( data => console.log(data));
  }

  componentDidMount() {
    this.myRef.current.focus();
    
  }

  render() { 
    return ( 
      <div className="container-fluid show-modal">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5 bounce-in-top">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" ref={this.myRef} 
                      className="form-control" placeholder="Email address" required autofocus
                      onChange={ e => this.setState({ email: e.target.value}) } />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" 
                        placeholder="Password" required
                      onChange={e => this.setState({ password: md5(e.target.value)}) } />
                          <label for="inputPassword">Password</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" class="custom-control-input" id="customCheck1" />
                      <label class="custom-control-label" for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <hr class="my-4" />
                    <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                    <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Login;