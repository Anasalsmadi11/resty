import React, { useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({});
  const [dataArray, setDataArray] = useState([]); // Change here
  // const url= requestParams.url


  //  const fetchData=  axios.get(  requestParams.url)
  // .then(response => {

  //   console.log(response.data);
  //   return response.data
  // })
  // .catch(error => {
   
  //   console.error('Error fetching data:', error);
  // });

// console.log("fetch",fetchData)
 
useEffect(()=>{
  if(requestParams.url){
    const fetchData= async()=>{
      const response= await axios.get(requestParams.url)
      const newData = {
        count: dataArray.length,
        results: response.data 
      };
      console.log("resopnse",response)
      setData(newData)
    }
    fetchData()
  }
},[requestParams.url, dataArray])

  const callApi = async(reqParams) => {
    setRequestParams(reqParams);
    const newDataArray = [...dataArray, reqParams];
    setDataArray(newDataArray);


  }


  return (
    <React.Fragment>
      <Header />
      <div data-testid="req-method">Request Method: {requestParams.method}</div>
      <div data-testid="url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
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
