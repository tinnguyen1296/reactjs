import React, { Component } from 'react';
import ProductList from './ProductList';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        products: [],
        pageRangeDisplayed: '',
        activePage: '',
        totalProductCount: '',
      }
    }
  }

  getProducts = (numberPage) => {
    let url = 'http://localhost:5000/api/products';
    
    return fetch(`${url}?page=${numberPage}`)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    
    return (
      <div>
        <ProductList data={this.state.data} getProducts={this.getProducts} />
      </div>
    )
  }
}