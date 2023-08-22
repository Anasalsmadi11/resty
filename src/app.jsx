import React, { useEffect, useReducer } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/History'
import { useState } from 'react';
import axios from 'axios';
function App() {
  
  const initialState={
    loading:false,
    results:null,
    history:[],
    requestParams:{},
    // url:'',
    // method:'',
    // data:{}

  
  }

function reducer(state, action){

  const{type,payload}= action
  switch(type){
    case "getData":

    return{
  
        requestParams:payload,
        // loading:false,
        history:[...state.history,payload.url]
      }
      case 'get':
        return{
          ...state, //with this
          results:payload,
          loading:false,
        // history:[...state.history,payload.data]

        }
      case "loading":
        return{
          ...state,
          loading:true
        }
      default:
        return state
  }
}

const [state, dispatch]= useReducer(reducer, initialState)

useEffect(()=>{
  if(state.requestParams.url){
    dispatch({type:"loading"})

    const fetchData= async()=>{
      const response= await axios.get(state.requestParams.url).then((res)=>{

        dispatch({type:"get", payload:res.data})
      })
    
        // console.log("response",response.data)

     
      // console.log("resopnse",response.data)
    }
    fetchData()
  }
},[state.requestParams])




const callApi = async(reqParams) => {
dispatch({
  type:"getData",
  payload:reqParams
})
  }

  
  return (
    <React.Fragment>
      <Header />
      <div data-testid="req-method">Request Method: {state.requestParams.method}</div>
      <div data-testid="url">URL: {state.requestParams.url}</div>
      <History historyData={state.history}/>
      <Form handleApiCall={callApi} />
      <Results data={state.results} />
      {state.loading ? <h2>loading... </h2>:null}
      <Footer /> 
    </React.Fragment>
  );

}

export default App;




// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
