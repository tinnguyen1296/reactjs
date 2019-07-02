import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { onClick, isDone, content, index } = this.props;

    return (
      <tr
        className={(isDone) ? 'done' : ''}
      >
        <td><div className="checkbox">
          <input id={"checkbox_" + index } type="checkbox" checked={isDone ? 'checked' : ''} />

            </div>
        </td>
        <td><label onClick={onClick} for={"checkbox_" + index }>{content}</label></td>
        <td className="td-actions text-right">
          <a href="" className="btn-edit">
            <FontAwesomeIcon icon="edit" size="xs" />
          </a>
          <a href="" className="btn-del">
            <FontAwesomeIcon icon="times" size="xs" />
          </a>
        </td>
      </tr>
    )
  }
}
