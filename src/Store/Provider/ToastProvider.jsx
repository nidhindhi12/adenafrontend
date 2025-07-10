import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { closeToast } from '../slice/ToastSlice';

const ToastProvider = ({ children }) => {
    const dispatch = useDispatch();
    const toastState = useSelector((state) => state.toastbox);
   

    useEffect(() => {
        if (toastState.message && toastState.type) {
            toast[toastState.type](toastState.message, {
                position: "top-center",
                autoClose: 2000,
                pauseOnHover: true,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                onclick: () => {
                    dispatch(closeToast());
                }


            })
        }
    // }, [toastState, dispatch])
    }, [toastState.id])
    return (
        <>
            {children}
            <ToastContainer />
        </>

    )
}
export default ToastProvider