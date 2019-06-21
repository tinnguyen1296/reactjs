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
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  handleChange(item) {
    return this.props.handleChange(item);
  }

  handleSubmit(e) {
    return this.props.handleSubmit(e, this.state.text);
  }

  handleDelete(id) {
    console.log(id);
    return this.props.isDelete(id);
  }

  handleEdit(id) {
    return this.props.isEdit(id);
  }

  render() {
    const { todoItems, isShowingActive, isShowAll, text, search } = this.state;
    let { displayedSearch } = this.state;
    const { data, handleChange, handleSubmit } = this.props;

    // if (!displayedSearch.length > 0) {
    //   displayedSearch = [...todoItems];
    // }

    const displayedItemsRender = data.filter(item => {
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
                {/* <input 
                  onChange={(e) => handleSearch(e)}
                  value={search}
                /> */}
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
                    handleDelete={() => this.handleDelete()}
                    isEdit={() => this.isEdit()}
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
                Add #{todoItems.length + 1}
              </button>
            </div>
          </form>
        </div>
    
      </div>
    )
  }
}
