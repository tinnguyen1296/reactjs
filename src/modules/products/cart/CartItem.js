import React, { Component } from 'react';

export default function(props) {
  
  const increase = () => {
    return props.increaseQuantity(props.item.id);
  }

  const decrease = () => {
    return props.decreaseQuantity(props.item.id);
  }

  return (
    <tr>
      <td>
        <img src={props.item.image} alt={props.item.image} />
      </td>
      <td>
        {props.item.name}
      </td>
      <td className="d-flex justify-content-around">
        <button disabled={props.item.quantity === 0 && 'disabed'} onClick={decrease}>-</button>
        <span>
          {props.item.quantity}
        </span>
        <button onClick={increase}>+</button>
      </td>
      <td>
        {props.item.price * props.item.quantity}
      </td>
    </tr>
  )
}