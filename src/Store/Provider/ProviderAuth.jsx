import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { changeauthvalue } from '../slice/AuthSlice'
import { Base_url } from '../../components/BaseUrL'

const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    if (token) {

        useEffect(() => {
            const getverify = async () => {
                try {
                    const config = {
                        headers:
                        {
                            authorization: `${token}`
                        }
                    }
                    const res = await axios.post(`${Base_url}/user/authverify`, {}, config)
                   
                    if (res.data.status) {
                        dispatch(changeauthvalue(res.data.data.data))
                    }
                    else {
                        localStorage.removeItem("token");
                    }

                } catch (error) {
                    console.log(error);
                }
            }
            getverify();
        }, [token, dispatch]);
    }


    return (
        <div>
            {children}
        </div>
    )
}

export default AuthProvider
