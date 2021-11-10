import React, { Component } from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import './css/bootstrap.min.css';

//LATIHAN 5.10
export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            your_name: '',
            status: ''
        }
    }

    render(){
        return(
            <div>
                <h2 style={{width: '550px', margin:'auto', textAlign: 'center', color:'#4d90fe'}}>
                    Sistem Informasi E-biz
                </h2>
                <Input getValues={(name,value)=> this.setState({[name] : value})}/>
                <Card header={this.state.your_name}>
                    <p>
                        {this.state.status}
                    </p>

                </Card>
            </div>
        )
    }
}


//LATIHAN 5.9
// export default class Main extends Component{
//     render(){
//         return(
//             <Input />
//         )
//     }
// }



//LATIHAN 5.7
// export default class Main extends Component{
//     render(){
//         return(
//             <Card>
//                 <p>Build encapsulated components that manage their own state, then compose them to make UIs.</p> {/* <--- Children dari component Card */}
//             </Card>
//         )
//     }
// }

