import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';


// function App(props){
//   return (
//     <h1>{props.saludo}, {props.nombre}!</h1>
//   )
// }

// function withSaludo(EtiquetaHTMLComponen){
//   return function saludoFunction(saludo){
//     return function nombreFunction(nombre){
//       return function ComponenteDeVerdad(){
//         return (
//           <React.Fragment>
//             <EtiquetaHTMLComponen nombre={nombre} saludo={saludo}/>
//             <p>Pasamos saludo en la segunda funcion</p>
//             <p>Pasamos nombre en la tercera funcion</p>
//           </React.Fragment>
//         )
//       }
//     }
//   }
// }

// const AppWthatever = withSaludo(App)('Hola')('Gaston');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  
);

