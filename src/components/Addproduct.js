import { addcartItems } from "../Store/slice/CartSlice";
import { showToast } from "../Store/slice/ToastSlice";


export const handleaddproduct = (item ,dispatch) => {
        dispatch(addcartItems(item));
        console.log(item);
        const existingItems = JSON.parse(localStorage.getItem('items')) || [];
        const alreadyexit= existingItems.some(prod=>prod._id===item._id)
        
        if(!alreadyexit){
             const itemWithQty = { ...item, qty: 1 };
            const updatedItems = [...existingItems, itemWithQty];
            localStorage.setItem('items', JSON.stringify(updatedItems));
            dispatch(showToast({message:"product added sucessfully", type:'success'}))
        }
        else
        {
            dispatch(showToast({message:"product  already added ", type:'warning'}))

        }
        
    }