import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Login from '../../../modules/account/Login'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: null,
    }
  }

  getAccount() {
    
  }
  
  render()
  {
    const user = Cookies.get('user');
    return (
      <div>
        { user ? (
          <Login redirect="checkout" />
        ) : (
          console.log('checkout')
        ) }
      </div>
    );
  }
}
export default Checkout;