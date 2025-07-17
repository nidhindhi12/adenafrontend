import axios from 'axios';
import { changeIsOpen } from '../Store/slice/ModaSlice';
import { showToast } from '../Store/slice/ToastSlice';
import { countofwislist } from '../Store/slice/FilterSlice';
import { Base_url } from './BaseUrL';


export const addToWishlist = async (productId, dispatch) => {
  const token = localStorage.getItem('token');

  if (!token) {
    dispatch(changeIsOpen());
    return;
  }

  try {
    const res = await axios.post(
      `${Base_url}/wishlist/addwishlist`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.status) {
      dispatch(showToast({ message: res.data.data.message, type: 'success' }));
      const updatedWishlist = await axios.get(`${Base_url}/wishlist/getwishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(countofwislist(updatedWishlist.data.data.data));
      console.log('done');
    } else {
      dispatch(showToast({ message: res.data.data.message, type: 'info' }));
    }
  } catch (error) {
    const errMsg = error?.response?.data?.data?.message || 'Something went wrong';
    dispatch(showToast({ message: errMsg, type: 'error' }));
  }
};
