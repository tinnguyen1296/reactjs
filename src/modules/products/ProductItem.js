import React, { Component } from 'react';
import { CartContext } from './cart/Cart';

class ProductItem extends Component {
  render() {
    const { image, name, price } = this.props.product;
    return (
      <div className="col-4 d-flex flex-column align-items-center">
        <div className="img">
          <img src={ image } alt="" />
        </div>
        <div className="title">
          <h3>{name}</h3>
        </div>

        <div className="price">
          <p>{price}</p>
        </div>
        <CartContext.Consumer>
          { ({addToCart}) => <button onClick={() => addToCart(this.props.product)}>Add to Cart</button>}
        </CartContext.Consumer>
      </div>
    );
  }
}

export default ProductItem;
