import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from "react";

function App() {

  let demoJson = [
    {name:'Aishwarya',age:'29',email:'aish@gmail.com'},
    {name:'Abhinav',age:'19',email:'abhi33@gmail.com'},
    {name:'Kashis',age:'27',email:'kashish@gmail.com'},
    {name:'Ketan',age:'22',email:'ketan77@gmail.com'},
    {name:'Vaibhav',age:'21',email:'vaihav711@gmail.com'},
  ]

  const listPunjab = ['Chandigarh','Mohali','Dharamshala'];
  const Jharkhand = ['Ranchi', 'Jamshedpur', 'Daltanganj'];

  if(localStorage.getItem('formData')){
    demoJson = JSON.parse(localStorage.getItem('formData'));
  }
  console.log("demojson >>",demoJson);
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

    if(event.target.name === 'email'){
      if(!isEmailAddress(event.target.value)){
        alert("Enter a valid email address")
      }
    }
    setFormFields(data);
  }

  const submit = (e) =>{
    e.preventDefault();
    console.log(formFields);
    localStorage.setItem('formData',JSON.stringify(formFields));
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
    localStorage.setItem('formData',JSON.stringify(formFields));
  }

  const removeFields = (index) =>{
    // console.log(index);
    let data = [...formFields];
    data.splice(index,1);
    setFormFields(data);
    localStorage.setItem('formData',JSON.stringify(formFields));
  }

  const isEmailAddress = (email) =>{
    const emailRegx = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const isValidEmail = emailRegx.test(email);
    console.log(email,isValidEmail);
    return isValidEmail;
  }

  return (
    <div className="App">
      <form onClick={submit}>
      {formFields.map((form,index)=>{
        if(form.name === ''){
          alert("Please enter the name");
        }
        if(form.age === ''){
          alert("Please enter the age");
        }
        if(form.email === ''){
          alert("Please enter the email");
        }

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
      <button data-testid="addmore" onClick={addFields}>Add more</button>
      <br/>
      <button data-testid="submit" onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
