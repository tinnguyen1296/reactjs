import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChange: false,
      text: this.props.content,
    }
  }

  handleInput(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    const { isChange, text } = this.state;
    
    isChange = false;
    this.props.isEdit(e, this.props.id, text);
  }

  handleDeleteItem(id) {
    // console.log(id);
    return this.props.handleDelete(id);
  }

  render() {
    const { onClick, isDone, content, id, isDel } = this.props;
    const { isChange, text } = this.state;

    let displayContent = <div>{content}</div>;
    if (isChange) {
      displayContent = <form onSubmit={(e) => this.handleSubmit(e) }>
        <input 
          type="text" 
          onChange={(e) => this.handleInput(e)} 
          value={text}
          onClick= {() => onmouseup =() => this.setState({ isChange: !isChange})}
          />
      </form>
    }
    
    return (
      <tr
        className={(isDone) ? 'done' : ''}
      >
        <td>
          <div className="checkbox">
            <input 
              id={"checkbox_" + id } 
              type="text"
              name="checkbox"
              value={(isDone) ? true : false}
              className="hidden" 
            />
            <div 
              onClick={onClick} 
              htmlFor={"checkbox_" + id}
              className="btn-checkbox"
            >
              <FontAwesomeIcon
                className="uncheck"
                icon={['far', 'circle']}
                size="lg"
                color="#ddd"
              />
              <FontAwesomeIcon
                className="check"
                icon={['far', 'check-circle']}
                size="lg"
                color="#1dc7ea"
              />
            </div>  
          </div>
        </td>
        <td>
          <label>
            {displayContent}
          </label>
        </td>
        <td className="td-actions text-right">
          <a className="btn-edit" onClick={
            () => this.setState({ isChange: !isChange})}>
            <FontAwesomeIcon icon="edit" size="xs" />
          </a>
        </td>
        <td className="td-actions text-right">
          <a className="btn-del" onClick={() => this.handleDeleteItem(id)}>
            <FontAwesomeIcon icon="times" size="xs" />
          </a>
        </td>
      </tr>
    )
  }
}
