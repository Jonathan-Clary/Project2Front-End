import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import createAxiosInstance from "../../services/AxiosInstance"

const VerifyPage = () => {
  
  const { '*': dynamicText } = useParams();
  
  const {token, user} = useAuth()
  const axiosInstance = createAxiosInstance(token)
  const navigate = useNavigate();

  const verifyEmail = async () => {
    try{
        console.log(dynamicText)
            const response = await axiosInstance.delete(
                "/verify/"+dynamicText
            );
    } catch (error) {
        console.log("error", error)
    }
}

useEffect(()=>{
    verifyEmail()
    navigate("/login")

},[])


  return (
    <div>

    </div>
  );
};

export default VerifyPage;