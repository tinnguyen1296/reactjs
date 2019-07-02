import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  addToCart = item => {
    // console.log(item);
    this.setState(state => {
      return {
        cartItems: [...state.cartItems, item]
      }
    })
  }

  render() {
    const object = {
      items: this.state.cartItems,
      addToCart: this.addToCart
    }
    return <CartContext.Provider value={object} >
        {this.props.children}
      </CartContext.Provider>
  }
}
