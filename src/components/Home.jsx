import axios from "axios";
import { useEffect, useState } from "react";


export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

   const [users,setUsers] = useState(0)
   const [term,setterm] = useState(0)
   useEffect(()=>{
     axios.get("http://localhost:8080/employee").then(({data})=>{
       setUsers(data.length)
       var result = data.filter(data=> data.status == "terminated")
       setterm(result.length)
     })
   },[])

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees:<span className="totalemp">{users}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{term}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted"></span>
        </div>
        <div>
          Total New: <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
