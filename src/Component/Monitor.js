import React, { Component } from 'react';
import Menu from "./Menu" ;
import ShowItems from "./ShowItems" ;

class Monitor extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-2 text-left bgmenu">
                        <Menu />
                    </div>
                    <div className="col-md-10 text-right">
                        <ShowItems />
                    </div>
                </div>

            </div>
        )
    }
}

export default Monitor;