import React, { Component } from 'react';
import { CartContext } from './Cart';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default class CartList extends Component {
  render() {
    return(
      <CartContext.Consumer>
        {({ items, total, increaseQuantity, decreaseQuantity}) => {
            return (
              <div className="container">
                <table className="table table-responsive table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => 
                      <CartItem 
                        item={item} 
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}  
                      />
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        {total}
                      </td>
                      <td></td>
                      <td>
                        <Link to="/checkout">Checkout</Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                
              </div>
            );
            
          }
        }
      </CartContext.Consumer>
    )
  }
}