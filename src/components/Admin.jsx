import axios from "axios";
import { useState } from "react";

export const Admin = () => {
  const [employeeData, setEmployeeData] = useState({
        employee_name: "",
        employee_id: "",
        title: "",
        salary: "",
        image: "",
        username: "",
        password: "",
        tasks: [],
        status: "",
        team: ""
  })
  const handleChange = (e) => {
    const {name , value} = e.target;
    setEmployeeData(
      {
      ...employeeData,
      [name]: value,
    }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeData)

    fetch("http://localhost:8080/employee", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeData),
        })
  }

  return (
    <form onSubmit={handleSubmit} className="createEmployee">

      <input onChange={handleChange} value={employeeData.employee_name} type="text" placeholder="Employee Name" name="employee_name" />
      <input onChange={handleChange} value={employeeData.employee_id} type="text" placeholder="Employee id" name="employee_id" />
      <select onChange={handleChange} value={employeeData.title} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input onChange={handleChange} value={employeeData.salary} type="number" placeholder="Salary" name="salary" />
      <input onChange={handleChange} value={employeeData.image} type="text" placeholder="Image" name="image" />
      <input onChange={handleChange} value={employeeData.username} type="text" placeholder="User Name" name="username" />
      <input onChange={handleChange} value={employeeData.password} type="password" placeholder="Password" name="password" />
      <input onChange={handleChange} value={employeeData.tasks}
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handleChange} value={employeeData.status} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleChange} value={employeeData.team} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};