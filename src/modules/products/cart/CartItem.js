import React, { Component } from 'react';

export default function(props) {
  console.log('item', props);
  return (
    <div>
      <div>
        <img src={props.item.image} alt={props.item.image} />
      </div>
      <div>
        <h3>{props.item.name}</h3>
      </div>
    </div>
  )
}