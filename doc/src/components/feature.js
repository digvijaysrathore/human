import React, { Component } from "react";

class Feature extends Component {
    render(){
        return (
            <div>
                <div className="proj-section container">
                    <div className="container">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.para}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Feature;