import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {

    return (
      <div className="conrainer-fluid banner">

        <div className="row">
          <div className="col-md-8 text-left">
            <div className="pic">
              <img src="/pic/mfulogo.png" height="60" />
            </div>
            <div className="text">
              <h4><Link to="/">    Chemical Storage</Link></h4>
            </div>
          </div>

          <div className="col-md-4 text-right">
            <div className="textban">
              <Link to="/login">ลงชื่อเข้าใช้</Link> | 
              <Link to="./Regis"> สมัครบริการ</Link> |
               ตะกร้า |
               ผู้ใช้n
            </div>
            
          </div>
        </div>
        <hr className="hr" />
      </div>


    );
  }
}
export default Header;
