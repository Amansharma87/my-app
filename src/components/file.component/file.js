import React from 'react';
import './file.css';
import { navigate,navigation,useRedirect,redirect,Redirect} from 'hookrouter';
class File extends React.Component {
//       function sayHello() {
//     alert('Hello, World!');
//   };
constructor(props) {
    super(props);
    this.state = { email: '',password:''};
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  account=
{
    'aman@gmail.com':12,
    'aman87337@gmail.com':12
}
  
 myChangeHandler(e){
     console.log(e.target.value)
     this.setState({ [e.target.id] : e.target.value})
     

 }
  Submit(event){ 
    event.preventDefault();
    if(this.account[this.state.email] ==this.state.password){

      navigate('/student');
      window.location.reload()
       
    }
    else{
    alert('Wrong Id pass')
    }
    
      
  }
 render(){
  return (
    <div className="wrapper fadeInDown">
        <div id="formContent">  
            <div className="fadeIn first">
               <img src={require('../../assets/user_icon.svg')} style={{ width: '20%' ,
                                                                     height: '20%',
                                                                     marginTop:'10px',
                                                                     marginBottom:'5px',
                                                                    }} id="icon" alt="User Icon" />
            </div>
            <form  onSubmit={this.Submit}>
            <input type="text" id="email" name="email" onChange={this.myChangeHandler} className="fadeIn second"  placeholder="Email" />
            <input type="password" name="password" id="password" onChange={this.myChangeHandler} className="fadeIn third"  placeholder="Password" />
            <input  type="submit"  className="fadeIn fourth" value="Sign Up" />
            </form>
        </div>
    </div>

  );
}
}
export default File;
