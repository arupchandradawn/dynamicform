import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";

function App() {

  const demoJson = [
    // {name:'Aishwarya',age:'29',email:'aish@gmail.com'},
    // {name:'Abhinav',age:'19',email:'abhi33@gmail.com'},
    // {name:'Kashis',age:'27',email:'kashish@gmail.com'},
    // {name:'Ketan',age:'22',email:'ketan77@gmail.com'},
    // {name:'Vaibhav',age:'21',email:'vaihav711@gmail.com'},
  ]

  const listPunjab = ['Chandigarh','Mohali','Dharamshala'];
  const Jharkhand = ['Ranchi', 'Jamshedpur', 'Daltanganj'];
  
  const [formFields, setFormFields ] = useState(demoJson); 
  const [cityFields, setCityFields ] = useState(Jharkhand);

  const handleFormChange = (event,index) =>{
    // console.log(index,event.target.name);
    let data = [...formFields];
    if(event.target.value !== ''){
      if(event.target.name === 'age'){
        if(event.target.value>0){
          data[index][event.target.name] = event.target.value;
        }
      }else{
        data[index][event.target.name] = event.target.value;
      }
    }
    
    if(event.target.name === 'state'){
      if(event.target.value === 'Jharkhand'){
        setCityFields(Jharkhand)
        console.log("hello",event.target.value);
      }else if(event.target.value === 'Punjab'){
        setCityFields(listPunjab)
      }
      console.log(data);
    }
    setFormFields(data);
  }

  const submit = (e) =>{
    e.preventDefault();
    console.log(formFields);
  }

  const addFields = () =>{
    let object = {
      name:'',
      age:'',
      email:'',
      state: '',
      city:''
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
              type="number"
              onChange={event => handleFormChange(event,index)}
              value={form.age}
            ></input>
            <input 
              name="email" placeholder='email'
              onChange={event => handleFormChange(event,index)}
              value={form.email}
            ></input>
            <select name="state" onChange={event => handleFormChange(event,index)}>
              <option value={"Jharkhand"}>Jharkhand</option>
              <option value={"Punjab"}>Punjab</option>
            </select>
            <select name="city">
              {cityFields.map((city)=>{
                <option>{city}</option>
              })}
              <option>{cityFields[0]}</option>
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
