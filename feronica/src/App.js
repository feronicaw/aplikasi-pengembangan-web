import React from 'react'
import './css/bootstrap.min.css'

export default class Finance extends React.Component {
    constructor() {
        super()

        this.state = {
           item : [],
           deskripsi : null,
           nominal : null,
           tipe : 1,
           total : 0
        }
    }
   
    setValueState(event){
      this.setState({
        [event.target.name] : event.target.value
      })
    }

    handleSelect(e){

    }

    addData(){
      var dataitem = this.state.item;
      var tipe = this.state.tipe;
      dataitem.push({
        deskripsi : this.state.deskripsi,
        nominal : this.state.nominal,
        tipe : this.state.tipe
      })
      this.setState({
        item : dataitem
      })
      {tipe == 1 ? this.state.total+=parseInt(this.state.nominal) : this.state.total-=parseInt(this.state.nominal)}

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div style={{ margin: 'auto', width: '50%', marginTop: 40 }}>
                        <table border="0" >
                            <tr>
                                <td>Deskripsi</td>
                                <td>
                                    <input 
                                    name="deskripsi" 
                                    value={this.state.deskripsi} 
                                    type="text" 
                                    onChange={this.setValueState.bind(this)} 
                                    className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>Nominal</td>
                                <td>
                                    <input 
                                    name="nominal" 
                                    value={this.state.nominal} 
                                    type="number" 
                                    onChange={this.setValueState.bind(this)} 
                                    className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>Tipe</td>
                                <td>
                                    <select name="tipe" onChange={this.setValueState.bind(this)} value={this.state.tipe} className="form-control">
                                        <option value={1}>Pemasukan</option>
                                        <option value={2}>Pengeluaran</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <button className="btn btn-success" onClick={this.addData.bind(this)}>Tambah</button>
                        <br />
                        <table className="table">
                            <thead>
                                <tr><th>Deskripsi</th><th style={{textAlign : 'right'}}>Nomimal</th></tr>
                            </thead>
                            <tbody>
                               {
                                 this.state.item.map((data, index) => (
                                   <tr key={index}>
                                     <td>
                                       {data.deskripsi}
                                     </td>
                                     <td style={{textAlign: 'right'}}>
                                      Rp {data.tipe==1 ? '' : '-'} {data.nominal}
                                     </td>
                                   </tr>
                                 ))
                               }
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td style={{textAlign: 'right'}}>
                                      Rp {this.state.total}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

// //NOMOR 11
// import React, { Component } from 'react';
// import './App.css';
// import './css/bootstrap.min.css';

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       progress_bar:''
//     }
//   }


//   handleChange=(event)=>{
//     this.setState({
//       progress_bar: event.target.value
//     })
//   }
  

//   render(){
//     return(
//       <div className="container">
//         <div className="form-container">
//           <div className="form-group">
//             <label>Nilai Progress : &nbsp;</label>
//             <select name="progress" onChange={this.handleChange}>
//                 <option value='0'>0</option>
//                 <option value='5'>5</option>
//                 <option value='10'>10</option>
//                 <option value='20'>20</option>
//                 <option value='30'>30</option>
//                 <option value='40'>40</option>
//                 <option value='50'>50</option>
//                 <option value='60'>60</option>
//                 <option value='70'>70</option>
//                 <option value='80'>80</option>
//                 <option value='90'>90</option>
//                 <option value='100'>100</option>
//             </select>
//           </div>
//           <br/>
//           <div className="form-group">
//             <input type="range" name="progress_bar" min='0' max='100' value={this.state.progress_bar} />
//           </div>
//         </div>


//       </div>
//     );
//   }
// }

// export default App;



