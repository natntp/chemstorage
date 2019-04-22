import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="conrainer-fluid banner">

        <div className="row">
          <div className="col-md-8 text-left">
          <div className="pic"> 
              <img src="/pic/mfulogo.png" height="90" /> 
          </div>
          <div className="text">
              <h4>Chemical Storage</h4>
          </div>
        </div>

        <div className="col-md-4 text-right">
            <div className="textban"> ลงชื่อเข้าใช้ | สมัครบริการ 
            </div>
        </div>
        </div>
        <hr/>
      </div>
      
      

    );
  }
}  
export default Header;
