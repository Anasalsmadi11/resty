import './form.scss';
import { useState } from 'react';

function Form(props){
  const[input, setInput]=useState("")
  const[method, setMethod]= useState("get")
  const [textarea, setTextarea]=useState(false)
  const[data, setData]= useState({})


  // let handleData=(e)=>{
  //   setTextareaData(e.target.value)
  //   console.log("data",textareaData)
  // }
  let handleData=(e)=>{
    e.preventDefault()
    let obj= {
      name:e.target.value,
      url: e.target.value
    }
    setData(obj)
  }
  let handleurlData=(e)=>{
    e.preventDefault()
    data.url= e.target.value
  }



  let handleChange=(e)=>{
    setInput(e.target.value)
   
  }
  let handleMethodChange=(e)=>{
    e.preventDefault()
    setMethod(e.target.id)
    if(e.target.id === "post" || e.target.id == "put"){
      setTextarea(true)
    }else{
      setTextarea(false)
    }
  }

 
    let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:method,
      url: input,
      data:data
    };
    props.handleApiCall(formData);
  }

//   let handleMethodChange = (e) => {
//     // Remove the 'selected' class from all spans
//     const spans = document.querySelectorAll('.methods span');
//     spans.forEach(span => {
//         span.classList.remove('selected');
//     });

//     // Add the 'selected' class to the clicked span
//     e.target.classList.add('selected');

//     setMethod(e.target.id);
// };


  return(
    <>
        <form >
          <label >
            <span>URL: </span>
            <input onChange={handleChange} name='url' type='text' />
            <button type="submit" onClick={handleSubmit}>GO!</button>
          </label>
          <label className="methods">
          <button onClick={handleMethodChange} id="get">GET</button>
            <button onClick={handleMethodChange} id="post">POST</button>
            <button onClick={handleMethodChange} id="put">PUT</button>
            <button onClick={handleMethodChange} id="delete">DELETE</button>
          </label>
        {textarea && 
        <form > 

          <label >
            <span>Name </span>
            <input onChange={handleData} id='namee' type='text' />
          </label>
          <label >
            <span>Url </span>
            <input onChange={handleurlData} id='urll' type='text' />
          </label>
          <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
        

      }
        </form>
    </>
  )
}

export default Form




// import React from 'react';

// import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
        // <form onSubmit={this.handleSubmit}>
        //   <label >
        //     <span>URL: </span>
        //     <input name='url' type='text' />
        //     <button type="submit">GO!</button>
        //   </label>
        //   <label className="methods">
        //     <span id="get">GET</span>
        //     <span id="post">POST</span>
        //     <span id="put">PUT</span>
        //     <span id="delete">DELETE</span>
        //   </label>
        // </form>
//       </>
//     );
//   }
// }

// export default Form;
