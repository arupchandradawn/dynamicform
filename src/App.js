import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";

function App() {

  const demoJson = [
    {name:'Aishwarya',age:'29',email:'aish@gmail.com'},
    {name:'Abhinav',age:'19',email:'abhi33@gmail.com'},
    {name:'Kashis',age:'27',email:'kashish@gmail.com'},
    {name:'Ketan',age:'22',email:'ketan77@gmail.com'},
    {name:'Vaibhav',age:'21',email:'vaihav711@gmail.com'},
  ]
  
  const [formFields, setFormFields ] = useState(demoJson); 

  const handleFormChange = (event,index) =>{
    // console.log(index,event.target.name);
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) =>{
    e.preventDefault();
    // console.log(formFields);
  }

  const addFields = () =>{
    let object = {
      name:'',
      age:'',
      email:''
    }

    setFormFields([...formFields,object])
  }

  const removeFields = (index) =>{
    // console.log(index);
    let data = [...formFields];
    data.splice(index,1);
    setFormFields(data);
  }

  return (
    <div className="App">
      <form onClick={submit}>
      {formFields.map((form,index)=>{
        return(
          <div key={index}>
            <input 
              name="name" placeholder='Name'
              onChange={event => handleFormChange(event,index)}
              value={form.name}
            ></input>
            <input 
              name="age" placeholder='Age'
              onChange={event => handleFormChange(event,index)}
              value={form.age}
            ></input>
            <input 
              name="email" placeholder='email'
              onChange={event => handleFormChange(event,index)}
              value={form.email}
            ></input>
            <select name="state" onChange={event => handleFormChange(event,index)}>
              <option>State</option>
              <option value={"Jharkhand"}>Jharkhand</option>
              <option value={"Punjab"}>Punjab</option>
              <option value={"West Bengal"}>West Bengal</option>
            </select>
             <button onClick={() =>{removeFields(index)}}>Remove</button>
          </div>
        )
      })}
      </form>
      <button onClick={addFields}>Add more</button>
      <br/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
