import { useState } from 'react' 
import axios from 'axios';
import {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  //  use reqres to log user in.
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  const [regUser, setRegUser] = useState({});
  const handleRegisterChan = e => {
		const { name, value } = e.target;
		if(name=="username"){
    setRegUser({
			...regUser,
			email: value,
		});
  }
  else{
    setRegUser({
			...regUser,
			password: value,
		});
  }
	};
  const handleRegisterSub = async e => {
		e.preventDefault();
		const { data } = await axios.post(
			'https://reqres.in/api/login',
			regUser
		);
		if (data.token) {
			toggleAuth()
      console.log(isAuth)
      navigate('/')
		}
    else{
      
    }
	};

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleRegisterChan}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleRegisterChan}
      />
      <input type="submit" value="SIGN IN" className="login_submit" onClick={handleRegisterSub}/>
    </form>
  );
};
