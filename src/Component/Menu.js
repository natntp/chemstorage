import React, { Component } from 'react';


class Menu extends Component {

    render() {
    return (
      <div className='container-fluid bgmenuu'>
        <button className="btn btn-block btn-success">ภาขนะ</button>
        <button className="btn btn-block btn-secondary">สารเคมี </button>
        <button className="btn btn-block btn-secondary">สารสิ้นเปลือง</button>
      </div>
    )
  }

}

export default Menu;
