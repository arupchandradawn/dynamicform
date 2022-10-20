import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";

function App() {
  
  const [formFields, setFormFields ] = useState([
    { name: '', age: '' , email :''},
    { name: '', age: '' , email :''},
    { name: '', age: '' , email :''}
  ]); 
  return (
    <div className="App">
      {formFields.map((form)=>{
        return(
          <div>
            <input name="name" placeholder='Name'></input>
            <input name="age" placeholder='Age'></input>
            <input name="email" placeholder='email'></input>
          </div>
        )
      })}
      
      <button>Add more</button>
      <br/>
      <button>Submit</button>
    </div>
  );
}

export default App;
