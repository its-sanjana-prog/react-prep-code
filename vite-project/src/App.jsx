
import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(5);

  // counter is variable and setCounter is method/function who is responsible for the update the value of counter

  // let counter = 5;

  const addValue = () => {
  // console.log('Value Added', Math.random());
  if ( counter < 20) {

  counter = counter + 1;
  console.log('Value Added', counter);
  setCounter(counter);
 
  console.log('Element', counter);
  
   }else{
    console.log('ADD NHI BUS AB');
   }
  }

const  removeValue =()=>{

  if (counter > 0) {

  counter = counter - 1;
  console.log('Value Removed', counter);
  setCounter(counter);

  console.log('Element', counter);
  
}else{
  console.log('REMOVE NHI BUS AB');
 }
}

  return (
   
     <>
      
      <h1>Chai or react</h1>
      <h2>Counter Vlaue : {counter}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove Value</button>

      </>
  )
}

export default App 
