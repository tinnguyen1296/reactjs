import React, { Component } from 'react';
import Cookies from 'js-cookie';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: null,
    }
  }

  componentDidMount() {
    const cart = Cookies.getJSON('cart');
    if(cart) {
      let totalPrice = 0;
      cart.forEach( item => {
        totalPrice += item.price * item.quantity;
        console.log('loop', totalPrice);
      });
      console.log(totalPrice);
      this.setState({ items: cart, total: totalPrice });
    }
  }

  addItem = item => {
    let { items } = this.state;

    const newItem = items.find( i => i.id === item.id);
    
    if(!newItem) {
      item.quantity = 1;
      this.setState({
          items: [...this.state.items, item],
          total: this.state.total + item.price,  
        },
        () => Cookies.set("cart", this.state.items)
      );
    } else {
      this.setState({
        items: this.state.items.map( item => 
          item.id === newItem.id
            ? { ...item,  quantity: item.quantity + 1 } 
            : item
        ),
        total: this.state.total + item.price
      },
      () => Cookies.set("cart", this.state.items)
      )
    }
  }

  render() {
    const cart = {
      items: this.state.items,
      addToCart: this.addItem,
      total: this.state.total
    }
    console.log(cart.total);
    return <CartContext.Provider value={cart} >
        {this.props.children}
      </CartContext.Provider>
  }
}
