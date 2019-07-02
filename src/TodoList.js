/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import './style.scss';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { content: 'aaa', isDone: true},
        { content: 'bbb'},
        { content: 'ccc'},
      ]
    }
  }

  handleChange(item) {
    console.log(item);
    const isDone = item.isDone;
    const { todoItems } = this.state;
    const index = todoItems.indexOf(item);
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        { ...item, isDone: !isDone },
        ...todoItems.slice(index + 1),
      ]
    })
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div>
        <div className="header">
          <h4>Todo</h4>
        </div>
        <div className="content">
          <div className="table table-todoitems">
            <table>
              <tbody>
                { todoItems.length > 0 && todoItems.map((item, index) =>
                  <TodoItem
                    onClick = {() => this.handleChange(item)}
                    isDone = {item.isDone}
                    content = {item.content}
                    index = {index}
                  />
                )}
              </tbody>
            </table>
          </div>


        </div>
      </div>
    )
  }
}
