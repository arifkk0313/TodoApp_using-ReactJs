import React, { Component } from "react";
import "./todooapp.css";
export default class todooapp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input:""
    });
  };
  deleteItem = (key)=>{
      this.setState({

        items:this.state.items.filter((data,index)=>index!==key)
      })
    //   const allItems = this.state.items
    //   allItems.splice(key,1)
    //   console.log(key);
    //   this.setState({
    //      items:allItems 
    //   }

  }
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div>
        <div className="todo-container">
          <form className="input-section" onSubmit={this.storeItems}>
            <h1>Todo App</h1>
            <input
              type="text"
              value={input}
              onChange={this.handleChange}
              placeholder="enter items ..."
            />
          </form>
          <ul>
            {items.map((data, index) => (
              <li key={index}>
                {data}
                <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
/*  */
