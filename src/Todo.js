/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import './style.scss';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { content: 'aabcxzc', isDone: false, id: 321313},
        { content: 'bb', isDone: true, id: 11}
      ],
      displayedSearch: [],
      text: '',
      search: '',
      isShowingActive: false,
      isShowAll: true,
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.isDelete = this.isDelete.bind(this);
    // this.isEdit = this.isEdit.bind(this);
  }

  handleChange = item => {
    const isDone = item.isDone;
    const { data } = this.state;
    const index = data.indexOf(item);
    this.setState({
      data: [
        ...data.slice(0, index),
        { ...item, isDone: !isDone },
        ...data.slice(index + 1),
      ]
    })
  }

  handleSubmit = (e, text) => {
    e.preventDefault();
    const { data } = this.state;
    if (!text.length) {
      return;
    }
    const newItem = {
      content: text,
      isDone: false,
      id: Date.now()
    }
    this.setState({
      data: [
        ...data,
        newItem
      ],
      displayedSearch: [],
      text: ''
    });
  }

  isDelete(id) {
    console.log(id);
    // const { data } = this.state;
    // const item = data.find(item => item.id === id);
    // const index = data.indexOf(item);

    // this.setState({
    //   data: [
    //     ...data.slice(0, index),
    //     ...data.slice(index + 1)
    //   ],
    //   displayedSearch: [],
    // })
  }

  // isEdit(e, id, contentIsChanged) {
  //   e.preventDefault();
  //   const { data } = this.state;
  //   const item = data.find(item => item.id === id);
  //   const index = data.indexOf(item);
  //   item.content = contentIsChanged;
  //   console.log(...data.slice(0, index), item, ...data.slice(index + 1));
  //   this.setState({
  //     data: [
  //       ...data.slice(0, index),
  //       item,
  //       ...data .slice(index + 1)
  //     ],
  //     displayedSearch: [],
  //   })
  // }

  // handleSearch(e) {
  //   const { todoItems } = this.state;
  //   let search = e.target.value.toLowerCase();
  //   this.setState({
  //     search: search
  //   })
  //   let displayedSearch = todoItems.filter(item => {
  //     let searchValue = item.content.toLowerCase();
  //     return searchValue.indexOf(search) === 0;
  //   })

  //   this.setState({
  //     displayedSearch: displayedSearch
  //   })
  // }

  render() {
    return (
      <TodoList 
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isDelete={this.isDelete}
      />
    )
  }
}
