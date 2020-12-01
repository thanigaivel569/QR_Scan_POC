import React, { Component } from 'react';
//import logo from './logo.svg';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './App.css';
import Hello from './Component/Hello'
import * as productActions from './Action/ProductAction';
//import { withRouter,Route, Switch, Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
//import ProductList from './Component/ProductList';
import QrReader from 'react-qr-reader'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : "Scan QRcode - Give camera access to scan",
      result: 'No result',
      scan: false

    }
  }
//  componentWillMount(){
//   this.props.actions.getProduct();
//  }
handleScan = data => {
  if (data) {
    this.setState({
      result: data
    })
  }
  
}
handleError = err => {
  console.error(err)
}

 changeState = () => {
  this.setState({
    scan:true
  });
  //this.onImageLoad()
 }

 
  render() {
    alert(this.state.result);
    return (
      <div className="App">
        <Hello name={this.state.value} />
       <button type="button"onClick={this.changeState}>Scan</button> 
         {this.state.scan ?
         <div className="size">
         <QrReader
          delay={100}
          onError={this.handleError}
          onScan={this.handleScan} 
          resolution={1600}
          style={{ width: '100%'}}
        />
        </div> : "" }
        <p>{this.state.result}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products:state.productsInfo.Products,
    isLoading: state.productsInfo.isLoading

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)

  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

