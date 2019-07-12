import React from 'react'
import logo from '../logo.svg'
import '../App.scss'
import { CartContext } from '../modules/products/cart/Cart'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todos">Todos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <CartContext.Consumer>
                      { ({items}) => `Cart (${items.length})`}
                    </CartContext.Consumer>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    )
  }
}

export default Header;
