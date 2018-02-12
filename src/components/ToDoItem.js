import React, { Component } from 'react'



export class ToDoItem extends Component {

  
  render() {
      const {item, completed, removeItem} = this.props
    return (
      <li  >
      <span onClick={() => completed(item.id)} className={item.done ? "done" : '' } >
        {item.text}
      </span>
      <span className="closeItem" onClick={() => removeItem(item.id)} >
        [x]
      </span>
          
      </li>
      
    )
  }
}

export default ToDoItem
