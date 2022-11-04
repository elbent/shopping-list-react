import React from "react";
import Store from "./Store.js"

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <div><Store storeName="Amazon"/></div>
            <div><Store storeName="Walmart"/></div>
            <div><Store storeName="Costco"/></div>
          </ul>
        </div>
      );
    }
  }

  export default ShoppingList