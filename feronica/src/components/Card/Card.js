import React,{ Component } from 'react';
import './Card.css';

//LATIHAN 5.7

export default class Card extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    {this.props.header}
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}