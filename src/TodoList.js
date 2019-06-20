/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import './style.scss';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      displayedItems: [],
      text: '',
      search: '',
      isShowingActive: false,
      isShowAll: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDelete = this.isDelete.bind(this);
    this.isEdit = this.isEdit.bind(this);
  }

  handleChange(item) {
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

  handleInput = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { todoItems, text } = this.state;
    if (!this.state.text.length) {
      return;
    }
    const newItem = { 
      content: text, 
      isDone: false,
      id: Date.now() 
    }
    this.setState({
      todoItems: [
        ...todoItems,
        newItem
      ],
      text: ''
    });
  }

  isDelete = (id) => {
    const { todoItems } = this.state;
    const item = todoItems.find( item => item.id === id);
    const index = todoItems.indexOf(item);
    console.log(todoItems, item, index);
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1)
      ]
    })
  }

  isEdit(e, id, contentIsChanged) {
    e.preventDefault();
    const { todoItems } = this.state;
    const item = todoItems.find(item => item.id === id);
    const index = todoItems.indexOf(item);
    item.content = contentIsChanged;
    console.log(...todoItems.slice(0, index), item, ...todoItems.slice(index + 1));
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        item,
        ...todoItems.slice(index + 1)
      ]
    })
  }
  
  handleSearch(e) {
    let search = e.target.value.toLowerCase();
    this.state.displayedSearch= this.state.todoItems.filter( item => {
      let searchValue = item.content.toLowerCase();
      return searchValue.indexOf(search);
    })
    this.setState({
      displayedItems: this.state.displayedSearch
    })
  }

  render() {
    const { todoItems, isShowingActive, isShowAll, text, search, displayedItems } = this.state;
    console.log(displayedItems);
    const displayedItemsRender = todoItems.filter(item => {
      if (isShowAll) {
        return item;
      }
      return item.isDone === isShowingActive;
    });

    return (
      <div className="wrapper-todolist">
        <div className="header">
          <h4>Todos</h4>
        </div>
        <div className="content">
          <div className="footer mw-100 d-flex justify-content-between">
            <div onClick={() => this.setState({ isShowAll: true })}>All</div>
            <div>
                <input 
                  onChange={(e) => this.handleSearch(e)}
                  value={search}
                />
            </div>
            <div onClick={() => this.setState({
              isShowingActive: !isShowingActive,
              isShowAll: false
            })}>
              {isShowingActive ? "Active" : "Done"}
            </div>
          </div>
          <div className="table table-todoitems d-flex justify-content-center">
            <table>
              <tbody>
                {displayedItemsRender.length > 0 && displayedItemsRender.map((item, index) =>
                  <TodoItem
                    onClick = {() => this.handleChange(item)}
                    isDone = {item.isDone}
                    content = {item.content}
                    id = {item.id}
                    isDel = {this.isDelete}
                    isEdit={this.isEdit}
                  />
                )}
                {!displayedItemsRender.length && 'No item'}
              </tbody>
            </table>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="new-todo">
                What needs to be done?
              </label>
            </div>
            <div>
              <input
                id="new-todo"
                onChange={(e) => this.handleInput(e)}
                value={text}
              />
              <button>
                Add #{todoItems.length + 1}
              </button>
            </div>
          </form>
        </div>
    
      </div>
    )
  }
}
