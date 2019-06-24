import React, { Component } from 'react';
import ProductList from './ProductList';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    
  }

  getProducts = async () => {
    return await fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(myJson => {
        return JSON.stringify(myJson);
      })
      .catch(error => console.error(error))
  }

  componentWillMount() {
    this.getProducts().then(res => {
      const arr = JSON.parse(res);
      console.log(arr);
      this.setState({
        products: arr.data
      })
    }).catch();
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        {/* <ProductList products={this.state.products.data} /> */}
      </div>
    )
  }
}