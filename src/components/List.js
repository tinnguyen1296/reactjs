import React, { Component } from 'react';

export default function(props) {
  return <div>{props.data.map( item => props.render(item))}</div>;
}
