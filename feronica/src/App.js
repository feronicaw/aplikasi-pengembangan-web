import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link, Switch
} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
          </ul>

          <Switch>
            <Route path='/' exact render={()=><div>Ini adalah halaman Home</div>} />
            <Route path='/news' render={()=><div>Ini adalah halaman News</div>} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;

//LATIHAN 5.6
// class App extends Component{
//   constructor(){
//     super();
//     //inisial state view
//     this.state={
//       view:'home'
//     }
//   }
//   render(){
//     //Functional component View untuk mengatur component yang tampil
//     const View = ()=>{
//       if(this.state.view =='home')
//         return <Home name="Eden Hazard" />
//       else if(this.state.view =='about')
//         return <About />
//       else if(this.state.view == 'help')
//         return <Help />
//     }
//     return(
//       <div>
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'about'})} className="nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'help'})} className="nav-link" href="#">Help</a>
//             </li>
//           </ul>
//         </nav>
//         <View />
//       </div>
//     )
//   }
// }
// export default App

//LATIHAN 5.5
// function Message(props){
//   return <p>Hello {props.name},</p>;
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message name="Ulrich" />
//         <Home name="Muhammad  Salah"/>
//       </div>
//     )
//   }
// }



//PROPS LATIHAN 5.4
// function Message(props){
//   return <p>Hello {props.name},</p>;
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message name="Ulrich" />
//         <Home name="Muhammad  Salah"/>
//       </div>
//     )
//   }
// }



//Class Component LATIHAN 5.3
// function Message(){
//   return "Pesan didalam Component";
// }

// class App extends Component{
// render(){
//   return(
//     <div>
//       <Message />
//       <Home />
//     </div>
//   )
// }
// }


//FUNCTIONAL COMPONENTS LATIHAN 5.2
// function Message(){
//   return <p>Hello from message component</p>
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message /> 
//       </div>
//     )
//   }
// }

//FUNCTION LATIHAN 5.1
// function sayHello(){
//     return "Hello World";
// }

// class App extends Component{
//   bilangHalo(){
//     return "Halo Dunia";
//   }

//   render(){
//     return(
//       <>
//         <p>sayHello : <b>{sayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//       </>
//     )
//   }
// }




