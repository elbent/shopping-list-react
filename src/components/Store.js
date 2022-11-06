import "./Store.css"

import React from "react";

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], inputValue: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    // We have to store the input value of the form as part of the state so it persists
    // We do that with a handler for when the input text changes
    handleChange(event) {
        if (event.target.value.trim() === "") {
          document.getElementById(this.props.storeName).value = "";
          this.setState({ inputValue: "" });
          return;
        }
        else {
          this.setState({ inputValue: event.target.value.trim() });
        }
      }

    // Default behavior for submitting a form is posting and redirecting to a new page, so
    // we have to call preventDefault()
    handleSubmit(event) {
        event.preventDefault()
        if (this.state.inputValue === "") {
            document.getElementById(this.props.storeName).value = "";
            this.setState({ inputValue: "" });
            return;
          }

        const { v4: uuidv4 } = require('uuid');
        var Id = uuidv4();

        this.setState({items: [...this.state.items, { id: Id, value: this.state.inputValue }]}) // New syntax for adding on to the end of an array

        document.getElementById(this.props.storeName).value = ""; // Reset the form's input field to be blank
        this.setState({inputValue : ""});
    }
    
    render() {
      return (
        <div className="store">
            <h2>{this.props.storeName}</h2>
            <ul>
                {this.state.items.map(item => <li key={item.id}>{item.value}</li>)} {/* Display a list item for each item in our state */ }
            </ul>
            <form onSubmit={this.handleSubmit}>
                <label>
                    What do you need?
                    <input id={this.props.storeName} type="text"  onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Add to List"/>
            </form>
        </div>
      );
    }
  }
