/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import './style.scss';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      displayedSearch: [],
      text: '',
      search: '',
      isShowingActive: false,
      isShowAll: true,
    }
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  handleChange(item) {
    return this.props.handleChange(item);
  }

  handleSubmit(e) {
    const result = this.props.onAdd(e, this.state.text);
    if (result) {
      this.setState({
        text: ''
      })
    }
  }

  handleDelete = id => {
    return this.props.onDelete(id);
  }

  handleEdit = (e, id, text) => {
    return this.props.onEdit(e, id, text);
  }

  handleSearch(e) {
    let search = e.target.value.toLowerCase();
    this.setState({
      search: search
    })
  }

  render() {
    const { isShowingActive, isShowAll, text, search } = this.state;
    const { data, handleChange } = this.props;

    const displayedItemsRender = data.filter(item => {
      if(search.length > 0) {
        let searchValue = item.content.toLowerCase();
        return searchValue.indexOf(search) === 0;
      }
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
                  placeholder="Search..."
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
                    onClick = {() => handleChange(item)}
                    isDone = {item.isDone}
                    content = {item.content}
                    id = {item.id}
                    key = {item.id}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                  />
                )}
                {!displayedItemsRender.length && 'No item'}
              </tbody>
            </table>
          </div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
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
                Add #{data.length + 1}
              </button>
            </div>
          </form>
        </div>
    
      </div>
    )
  }
}
