import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { showToast } from '../Store/slice/ToastSlice';
import { useDispatch } from 'react-redux';
import { Baseurl } from './BaseUrL'

const EmailVerify = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const [a, seta] = useState('false')
  useEffect(() => {
    const verifyemail = async () => {
      try {
        const response = await axios.get(`${Baseurl}api/verify-email/${token}`);
       
        if (response.data.data.status) {
          seta('true');
        }

        dispatch(showToast({ message: response.data.data.message, type: 'success' }))

      } catch (error) {
        console.log(error);
        dispatch(showToast({ message: response?.data?.data?.message, type: 'error' }))
      }
    }
    verifyemail()
  }, [token])
  return (
    <>
      {a && <h1>Verified</h1>}
    </>
  )
}

export default EmailVerify