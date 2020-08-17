import React from 'react';
import './student.css';
class Student extends React.Component {
    Students=[
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
    render(){
        return (
        <div>
        <h1>Student record</h1>
        <ul>
            {this.Students.map(s=>
            <div>
            <li>{s.name}</li>
            <li>{s.section}</li>
            </div>
            )}
        </ul>

        </div>
        )
    }
}
export default Student;
 