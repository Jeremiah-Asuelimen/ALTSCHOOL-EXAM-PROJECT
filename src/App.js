import React from 'react';
import Count from './components/useCounters';
import { Routes, Route, NavLink} from 'react-router-dom';
import NotFound from './components/NotFound'
import Test from './components/ErrorTest'
import './App.css'
import ErrorBoundary from './components/Errorboundary';

function Welcome() {

  return(
    <div>
      <h1>ALT-SCHOOL EXAM-PROJECT</h1>
      <h3>WELCOME TO MY PROJECT</h3>
    </div>
    
  )
}



function App() {

  return( 
    <main className="App"> 
      <div> 
        <nav> 
           <NavLink to="/" style={{textDecoration: "none"}} > 
           My Diary
          </NavLink> 
          <NavLink to= "/useCounter" style={{textDecoration: "none"}} >
            Count 
          </NavLink>
          <NavLink to="/ErrorBoundary" style={{textDecoration: "none"}} > 
            Error boundary 
          </NavLink> 
          <NavLink to="/NotFound" style={{textDecoration: "none"}} > 
            Home
          </NavLink> 
        </nav> 
        <Welcome />
      </div> 
 
       <div> 
         <Routes> 
          <Route path='/'>welcome To paradise</Route>
          <Route path="/useCounter" element={ <Count />} /> 
          <Route path="/ErrorBoundary" element={<Test />} /> 
          <Route path="NotFound" element={<NotFound />} /> 
        </Routes>  
      </div> 
    </main> 
  ); 
} 



export default App;