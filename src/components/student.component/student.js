import React,{useState} from 'react';
import './student.css'; 
import { findAllByTestId } from '@testing-library/react';
class Student extends React.Component {
   constructor(props) {
        super(props);
        // const [pro, setprop] = useState(false);
        // const [fruit, setFruit] = useState('banana');
        // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
        this.state = {

            form:{ name: '',phone:'',section: '',roll: ''},
            prop:false,
            del:false
        };
        this.Students=[
            { 
               "name":"Aman sharma",
               "roll": 123,
               "section":"B",
               "phone":7017
            },
            {
                "name":"Aditya Rathore",
                "roll": 1234,
                "section":"A",
                "phone":90
            },
            { 
                "name":"Aditya sharma",
                "roll": 12345,
                "section":"C",
                "phone":890
             },
             {
                 "name":"Abhay",
                 "roll": 34,
                 "section":"A",
                 "phone":70
             },
    ]
        this.onSubmit = this.onSubmit.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.remove= this.remove.bind(this);
      }
   
onSubmit(event){
    if(!this.state.del){
    event.preventDefault();
    this.Students.push(this.state.form) 
    console.log(this.Students) 
    this.setState({
        form:{ name: '',phone:'',section: '',roll: ''},
        prop:false,
        del:false
      })
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(this.state),
    };
      fetch("https://run.mocky.io/v3/3ed83c10-ae87-4706-8a7a-4a0733a5d677",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
         console.log(result)})
        }

}
remove(event) {
    console.log(event.target.value.toLowerCase())
    var item=event.target.value.toLowerCase()
    for (let i = 0; i< this.Students.length; i++) {
      if(this.Students[i].name.toLowerCase()==item)
      this.setState({form:
     this.Students.splice(i,1),prop:false,del:false
    })
       
    }
  }
myChangeHandler(event){
     this.setState({form :{[event.target.name] : event.target.value},
      })
}
    render(){
        return (

            <div>
            <h1>Hey Admin</h1>
            <p>Want to Add a Employee!!</p>
             { this.state.prop ? <div className="employeeform">
            <form className="eform" onSubmit={this.onSubmit}>
                
                {this.state.del?
             <div>
                 <h3>Delete Employee</h3>
                 <input  name="name" onChange={this.remove} type="text" id="name" placeholder="Name" /> <br />
             </div>
               :
               
               <div>
                   <h3>Add Employee</h3>
               <input  name="name" onChange={this.myChangeHandler} type="text" id="name" placeholder="Name" /> <br />
                <input  name="phone" onChange={this.myChangeHandler} type="text" id="position" placeholder="Phone-no" /> <br />
                <input  name="section" onChange={this.myChangeHandler} type="text" id="office" placeholder="Section"/><br />
                <input  name="roll"  onChange={this.myChangeHandler}type="text" id="salary" placeholder="Roll-no" /><br />
                <input disabled={this.state.del} type="submit"  value="Submit" />
                </div>
    }
            </form>
            </div>:
            <div> 
            <button onClick={this.add=()=>{this.setState({form:this.state.form,prop:true,del:false});}}>Add</button>
            <button onClick={this.add=()=>{this.setState({form:this.state.form,prop:true,del:true});}}>Delete</button>
            <br />
             <h2 style={{color:"black"}}>Registered Employee</h2>
            <table style={{width:'100%'}}>
                <tbody>
              <tr>
                <th>Name</th>
                <th>Phone-no</th>
                <th>Section</th>
                <th>Roll-no</th>
              </tr>
              </tbody>

              <tbody>
              {this.Students.map((e,index)=>( 
              
              <tr key={index}>
                  
                <td >{e.name}</td>
                <td >{e.phone}</td>
                <td>{e.section}</td>
                <td >{e.roll}</td>
                {/* <td><button onClick={this.removePeople=(event)=>{console.log(this.Students.indexOf(event))}}>delete</button></td> */}
              </tr>
              ))}
              </tbody>
             
            </table>
           </div>}
            </div>
        )
    }
}
export default Student;
 