/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { name: 'aaa', isDone: true},
        { name: 'bbb'},
        { name: 'ccc'},
      ]
    }
  }

  handleChange() {
    // const { todoList } = this.state;
    
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <div className="header">
          <h4>Todo</h4>
        </div>
        <div className="content">
          <div className="table">
            <table>
              <tbody>
                {todoList.map((item, i) => (
                  <tr
                    onClick={this.handleChange}
                    className={(item.isDone) ? 'done' : ''}
                  >
                    <td><div class="checkbox">
                      <input id="checkbox0" type="checkbox" />
                      <label for="checkbox0">
                        </label>
                        </div>
                    </td>
                    <td>{item.name}</td>
                    <td class="td-actions text-right">
                      <button type="button" class="btn-simple btn btn-xs btn-info">
                        <FontAwesomeIcon icon="edit" size="xs" />
                      </button>                     
                      <button type="button" class="btn-simple btn btn-xs btn-danger">
                        <FontAwesomeIcon icon="times" size="xs" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          

        </div>
      </div>
    )
  }
}