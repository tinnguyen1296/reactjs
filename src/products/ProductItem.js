import React, { Component } from 'react';

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
      </div>
    );
  }
}
 
export default ProductItem;