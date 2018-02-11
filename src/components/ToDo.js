import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export class ToDo extends Component {
  state = {
    items:
      JSON.parse(localStorage.getItem("items")) !== null
        ? JSON.parse(localStorage.getItem("items"))
        : []
  };

  saveLS = () => {
    setTimeout(() => {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }, 0);
  };

  submitAddTask = e => {
    e.preventDefault();
    if (!this.input.value.length) return;

    this.setState({
      items: [
        ...this.state.items,
        {
          id: Date.now(),
          text: this.input.value,
          done: false
        }
      ]
    });
    this.input.value = "";
    console.log(this.state.items);
    this.saveLS();
  };

  completed = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    });
    this.saveLS();
  };

  removeItem = id => {
    this.setState({
      items: this.state.items.filter(item => {
        return item.id !== id;
      })
    });
    this.saveLS();
  };

  clearAll = () => {
    this.setState({
      items: this.state.items.filter(item => {
        return item.length < 0;
      })
    });
    localStorage.removeItem("items");
  };

  render() {
    const { items } = this.state;
    return (
      <div className="todo">
        <button onClick={this.clearAll}>clear localStorage</button>
        <form className="todo__form" onSubmit={this.submitAddTask}>
          <input ref={input => (this.input = input)} type="text" />
          <input type="submit" value="Add" />
        </form>
        <div className="todo__list">
          Do it:
          <div className="todo__list_map">
            <ul>
              {items.map(item => {
                return (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    completed={this.completed}
                    removeItem={this.removeItem}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;

/* {
    id: Date.now(),
    text: this.state.textInput,
    done: false
}) */
