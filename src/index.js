
import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Careers from './component/Careers';
import About from './component/About';
import Projects from './component/Project';
import Contact from './component/Contact';
import Forms from './component/forms';




ReactDOM.render(
<Router>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/forms' element={<Forms/>}/>
 
    </Routes>
</Router>
  ,

  document.getElementById('root')
);



// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import '../src/index.css'
 
// const card = {
//   backgroundColor : "pink",
// }

// ReactDOM.render(

//   <>
  


// <div className="container">
// <div className="card" style={card}>
// <h1>
// practice program - 3

// </h1>

// <img src="https://images.pexels.com/photos/2744760/pexels-photo-2744760.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature"/>

// </div>
// </div>
//   </>
//   ,
//   document.getElementById('root')
// );









































































// import React from 'react';
// import  ReactDOM  from 'react-dom'; 

// importing css Files
// import '../src/style/newindex.css' ;


// const title ={
//   color:'orange',
//   backgroundColor:'black',
//   textTransform:'capitalize',
//   padding : '20px'
// }



// ReactDOM.render(
//   <>
  
//   <h1 style={{  color:'orange',
//   backgroundColor:'black',
//   textTransform:'capitalize',
//   padding : '20px'}}>
//     inline element and internal styling

//   </h1>

//   <h2>exteral stylesheet</h2>

//   </>

//   , 
//   document.getElementById('root')
// );


























// import React from 'react';
// import  ReactDOM  from 'react-dom'; 

// let myname = "bharath";
// let place = "mumbai";
// let image = "https://unsplash.com/photos/OL2FkTjKD6w"
// let time = new Date().toLocaleDateString();
// ReactDOM.render(
//   <>
//   <h2>{`my name is ${myname}`}</h2>
//   <h2>{`from ${place}`}</h2>
//   <h1>{`${time}`}</h1>
  
//   <img src='{image}' alt='image fail'/>
//   </>
//   , 
//   document.getElementById('root')
// );





















// import React from 'react';
// import  ReactDOM  from 'react-dom';

// let fname="bharath";
// let color = "pink";
// ReactDOM.render(
//  <> <h1>
//     my name is {fname} and my fav colour is {color}
  
//   </h1>
  
//   </>
//   ,

//   document.getElementById('root')
// );




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
