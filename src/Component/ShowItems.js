import React, { Component } from 'react';
import ItemDetail from "./ItemDetail" ;


class ShowItems extends Component {

  ShowItems() {
      return this.props.items && this.props.items.map(item => (
        <ItemDetail {...item} />
      ))
    }
  

  render() {
    return (
      <div className="row">
          {this.ShowItems()}
      </div>
    );
  }
}

export default ShowItems;
