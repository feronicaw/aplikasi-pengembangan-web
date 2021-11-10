import React from 'react';

export default class Profile extends React.Component{

    render(){
        return(
            <div>
                <h2>Profile {this.props.match.params.nama}</h2>
            </div>
        )
    }

}


