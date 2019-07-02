import React, { Component } from 'react';
import { CartContext } from '../components/Cart';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="col-4 d-flex flex-column align-items-center">
        <div className="img">
          <img src={ this.props.image } alt="" />
        </div>
        <div className="title">
          <h3>{this.props.name}</h3>
        </div>

        <div className="email">
          <p>{this.props.email}</p>
        </div>
        <CartContext.Consumer>
          { ({addToCart}) => <button onClick={() => addToCart(this.props.name)}>Add to Cart</button>}
        </CartContext.Consumer>
      </div>
    );
  }
}

export default ProductItem;
