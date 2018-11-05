import React, { Component } from 'react';


class SideNav extends Component{

    backred ={
        "background":"#C3423F"
    }
    screen ={
        "height":"100vh",
        "background":"#C3423F"
    }

    render(){
        return (
            <div className="col-md-2" style={this.backred}>
                <h3 className="text-center">title</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        )
    }
}

export default SideNav