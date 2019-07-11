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
    let { text } = this.state;
    this.setState({
      isChange: false,
    })
    this.props.handleEdit(e, this.props.id, text);
  }

  handleDeleteItem = () => {
    return this.props.handleDelete(this.props.id);
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
          onClick= {() => this.setState({ isChange: !isChange})}
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
                icon={['fas', 'circle']}
                size="lg"
                color="#ddd"
              />
              <FontAwesomeIcon
                className="check"
                icon={['fas', 'check-circle']}
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
          <a className="btn-del" onClick={this.handleDeleteItem}>
            <FontAwesomeIcon icon="times" size="xs" />
          </a>
        </td>
      </tr>
    )
  }
}
