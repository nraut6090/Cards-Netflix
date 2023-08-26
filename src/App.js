import  React from 'react';
import Heading from './Heading';
import Amazon from './Amazon';
import Netflix from './Netflix';

import './App.css'


function App(){
  const choice=prompt("Enter your favourite series");
  const decision=()=>{
    if(choice==='Amazon'){
      return(
        <>
         {/* Heading */}
         <Heading type="Amazon"/>
         <Amazon/>
        </>
      )
    }
      else{
        return(
        <>
          {/* Heading */}
          <Heading type="Netflix"/>
          <Netflix/>
        </>
       )
      }
    }

    //We can use ternary operator in above case to return the elements 

    return(
      <>
      
      {decision()};
      </>
    )
  
  }
  
export default App;