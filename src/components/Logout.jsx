import { Navigate } from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext'
import { useEffect } from 'react';

export const Logout = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  useEffect(()=>{
     toggleAuth()
  },[])

  return <Navigate to="/"></Navigate>
};
