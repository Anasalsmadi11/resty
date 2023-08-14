

import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDom from 'react-dom';

import App from './app.jsx';

function Main(){
  return <App />;
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Main />);

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);
