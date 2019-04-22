import React, { Component } from "react";

class ItemDetail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {itemname, type, detail, available, unitprice} = this.props;
        
        return (
            <div className="col-md-3 col-sm-6"> 
                <h5> {itemname} </h5>
                <h5> {type} </h5>
                <h5> {detail} </h5>
                <h5> {available} </h5>
                <h5> {unitprice} </h5>
                <button className="btn btn-block btn-secondary"> หยิบใส่ตะกร้า </button>

            </div>
        )
    }
}

export default ItemDetail ;