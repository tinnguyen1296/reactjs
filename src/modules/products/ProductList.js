import React, { Component} from "react";

import ProductItem from "./ProductItem";
import PaginationProduct from "./PaginationProduct";

export default class ProductList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  getProducts = (number) => {
    return this.props.getProducts(number);
  }

  render() {

    let { products, pageRangeDisplayed, activePage, totalProductCount } = this.props.data;

    return (
      <div>
        <h1>Products</h1>
        <div className="container">
          <div className="row">
            { products.length > 0 && products.map( (product,index) =>
              <ProductItem
                product={product} />
            )}
          </div>
          <PaginationProduct
            activePage={activePage}
            pageRangeDisplayed={pageRangeDisplayed}
            totalProductCount={totalProductCount}
            getProducts={this.getProducts} />
        </div>
      </div>
    )
  }
}
