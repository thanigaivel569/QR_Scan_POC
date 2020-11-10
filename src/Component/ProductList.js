import React, { Component } from 'react';


class ProductList extends Component {

    productList(){
        return  this.props.products.map((e,index) => (<li key={index}>{e.id}    {e.title}</li>))
    }
  render() {
    return (
      <div>
        <h2>{this.productList()}</h2>
      </div>
    );
  }
}

export default ProductList;