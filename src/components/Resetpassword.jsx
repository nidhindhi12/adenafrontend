import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Base_url } from './BaseUrL';

const ResetPassword = () => {
    const { userId, token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Base_url}/user/reset-password/${userId}/${token}`, {
                newPassword
            });
            if (response.data.status) {
                showToast({ message: response.data.data.message, type: 'success' })
            }
            else {
                showToast({ message: response.data.data.message, type: 'success' })
            }

           
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <>
            <div className=" d-flex  flex-column justify-content-center align-items-center gap-5 vh-100  " >

                <h3>Reset Password</h3>
                <Form onSubmit={handleSubmit} >
                    <div style={{ maxWidth: '500px' }} className='pb-3 '>
                        <Form.Label>
                            New Password
                        </Form.Label>
                        <Form.Control type="password" placeholder=" New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />

                    </div>
                    <Button onClick={handleSubmit}> Reset Password</Button>
                </Form>
            </div>


        </>
    );
};

export default ResetPassword;
