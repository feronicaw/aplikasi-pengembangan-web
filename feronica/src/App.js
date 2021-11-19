import "./App.css";
import React from "react";
import "./css/bootstrap.min.css";
import Foto from "./views/fero.jpg";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        className='btn btn-outline-success'
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}>
        Login
      </button>
    ));
    const LogoutButton = withRouter(({ history }) => (
      <button
        className='btn btn-outline-danger'
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}>
        Logout
      </button>
    ));
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => (
          <div className='text-center container h2 text-primary'><br />Halaman Utama</div>
        ),
      },
      {
        path: "/login",
        render: () => (
          <div className='container text-center'><br />
            <h2 className='fw-bold'>Login</h2><br/>
            <table className='table table-borderless text-start'>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-dark w-50'
                      type='text'
                      placeholder='Input your MISO ID...'
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-dark w-50'
                      type='password'
                      placeholder='Input your password...'
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <LoginButton />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div className='container text-center text-dark'><br />
              <h2 className='fw-bold'>Profile Mahasiswa</h2><br />
              <table className='table table-borderless text-start'>
                
               
                    <img src={Foto} className='foto' /><br/><br/>
                <tbody>   
                  <tr>
                    <td>Nim</td>
                    <td>:</td>
                    <td>192110177</td>
                  </tr>
                  <tr>
                    <td>Nama / NIM</td>
                    <td>:</td>
                    <td>Feronica / 192110177</td>
                  </tr>
                  <tr>
                    <td>Program Studi / Kelas</td>
                    <td>:</td>
                    <td>Sistem Informasi / B</td>
                  </tr>
                  <tr>
                    <td>Peminatan</td>
                    <td>:</td>
                    <td>e-Bisnis</td>
                  </tr>
                  <tr>
                    <td>
                      <LogoutButton />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
                    
                    
              <br />
            </div>
          ) : (
            <Redirect to='/login' />
          ),
      },
    ];
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-md'>
            <div className='lala'>
              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <NavLink exact className='nav-link text-dark' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/profile'
                      className='nav-link text-dark'
                      activeClassName='active'>
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// class App extends Component{
//   constructor(){
//     super();
//     this.myRef=React.createRef();
//   }
//   componentDidMount(){
//     this.myRef.current.style.height ='100vh';
//     this.myRef.current.style.width ='100%';  
//   }
//   setBackground(bgColor,txtColor){
//     this.myRef.current.style.background = bgColor;
//     this.myRef.current.style.color = txtColor;
//   }
//   render(){
//     return(
//       <div ref={this.myRef}>
//         <p>Belajar pengembangan aplikasi web dengan Reactjs dengan Router dan Refs</p>
//         <button onClick={this.setBackground.bind(this,'white','black')}>White</button>
//         <button onClick={this.setBackground.bind(this,'red','white')}>Red</button>
//         <button onClick={this.setBackground.bind(this,'green','white')}>Green</button>
//         <button onClick={this.setBackground.bind(this,'blue','white')}>Blue</button>
//       </div>
//     )
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import{
//   BrowserRouter as Router,
//   Route,
//   Link, Switch,
//   withRouter,
//   Redirect
// } from "react-router-dom";

// class App extends Component{
  
//   constructor(){
//     super()
//     this.state={
//       isAuth : false
//     }
//   }

//   render(){
//       const LoginButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : true})
//           history.push('/profile')
//         }}>Login</button>
//       ))

//       const LogoutButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : false})
//           history.push('/login')
//         }}>Logout</button>
//       ))

//       const routes =[{
//         path : '/',
//         exact : true,
//         render : ()=> <div>Ini Halaman Home</div>
//       },{
//         path : '/news',
//         render : ()=> <div>Ini Halaman News</div>

//       },{
//         path : '/login',
//         render : ()=> <LoginButton />

//       },{
//         path : '/profile',
//         render : ()=> this.state.isAuth ? <div>Ini Halaman Profile <br /><LoginButton /></div> : <Redirect to='/login' />

//       }
//     ]

//     return(
//       <Router>
//         <div>
//           <ul style={{listStyle: 'none'}}>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/news'>News</Link></li>
//             <li><Link to='/profile'>Profile</Link></li>
//           </ul>

//           <Switch>
//             {
//             routes.map((item, index)=>(
//               <Route path={item.path} exact={item.exact} render={item.render} />
//             ))
//             }
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }



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




