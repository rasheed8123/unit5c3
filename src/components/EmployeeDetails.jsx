import axios from "axios"
import {useState,useEffect} from "react";
import {  useParams } from "react-router-dom"

export const EmployeeDetails = () => {
  const {id} = useParams()
  const [user,setUser]=useState({})

  useEffect(()=>{
    axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
     setUser(data)
    })
},[])

    return (
      <div className="user_details">
        <img className="user_image"  src={user.image} />
        <h4 className="user_name">user name: {user.employee_name}</h4>
        <span className="user_salary">user salary:${user.salary}</span>
        <span className="tasks">users current tasks list :

          {user.tasks.map((e)=>{
           return <li className="task">{e}</li>
          })}
          
        </span>
        Status: <b className="status">user status:{user.status} </b>
        Title: <b className="title">user title:{user.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        {user.status=="working" ? <button className="fire">Fire Employee</button> : null}
        
        {/* Show this button only if user is not already team lead or terminated */}
        {(user.status!=="terminated"|| user.title!=="Team Lead") ? <button className="promote">promote</button> :null}
        
      </div>
    );
  };