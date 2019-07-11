import React, { Component } from 'react';
import { CartContext } from './Cart';
import CartItem from './CartItem';

export default class CartList extends Component {
  render() {
    return(
      <CartContext.Consumer>
        { ({ items, total}) => {
            
            items.map(item => <CartItem item={item} />)
            
          }
        }
      </CartContext.Consumer>
    )
  }
}