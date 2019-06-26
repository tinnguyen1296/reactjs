import React, { Component } from 'react';

class PaginationProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handlePageChange = (number) => {
    return () => this.props.getProducts(number);
  }

  render() {
    const { activePage, totalProductCount } = this.props;
    const itemPerPage = 9;
    const pageRangeDisplayed = 5;
    const totalPage = Math.ceil(totalProductCount / itemPerPage);

    let showPag = [];
    let j = activePage;
    if (activePage > Math.floor(pageRangeDisplayed / 2)) {
      j = activePage - Math.floor(pageRangeDisplayed / 2);
    }
    
    for (let i = j; i < pageRangeDisplayed + j; i++) {
      if (i <= totalPage)
        showPag.push(i);
    }

    return ( 
      <nav className='d-flex justify-content-center'>

        <ul className="pagination">
          <li className={`page-item ${activePage === 1 && 'disabled'}`}>
            <span class="page-link"
              onClick={this.handlePageChange(activePage - 1)}
            >
              Previous
            </span>
          </li>
          { showPag.length > 0 && showPag.map( number => 
            <li className={`page-item ${activePage === number && 'active'}`}>
              <span className="page-link" 
                onClick={this.handlePageChange(number)} 
              >
                { number }
              </span>
            </li>
          )}
          <li className={`page-item ${activePage === totalPage && 'disabled'}`}>
            <span className="page-link"
              onClick={this.handlePageChange(activePage + 1)} >
              Next
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}
 
export default PaginationProduct;