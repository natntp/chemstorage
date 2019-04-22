import React, { Component } from 'react';
import Header from "./Component/Header";
import Monitor from "./Component/Monitor";

class App extends Component {

    constructor(props) {
      super(props) ;
      this.state = {Items : "" } ;
    }

    componentDidMount() {
      this.setState({Items : [
        { itemID: 1, itemname: "สาร1", type: "สารเคมี", detail: "ใช้สำหรับทำ1", available: "10", unitprice: "200" },
        { itemID: 2, itemname: "สาร2", type: "สารเคมี", detail: "ใช้สำหรับทำ2", available: "20", unitprice: "200" },
        { itemID: 3, itemname: "สาร3", type: "สารเคมี", detail: "ใช้สำหรับทำ3", available: "30", unitprice: "200" },
        { itemID: 4, itemname: "สาร4", type: "สารเคมี", detail: "ใช้สำหรับทำ4", available: "40", unitprice: "200" },
        { itemID: 5, itemname: "สาร5", type: "สารเคมี", detail: "ใช้สำหรับทำ5", available: "50", unitprice: "200" },
        { itemID: 6, itemname: "สาร6", type: "สารเคมี", detail: "ใช้สำหรับทำ6", available: "60", unitprice: "200" } ,
    ]})
    }


  render() {
    return (
      <div className="conrainer-fluid">
          <Header />
          <Monitor Items={this.state.Items}/>
      </div>
    );
  }
}  
export default App;
