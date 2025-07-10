import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { showToast } from '../../Store/slice/ToastSlice';
import CreateProduct from './CreateProduct';
import ProductData from '../ProductData';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList';



const Product = () => {
  const initialState = {
    title: '',
    price: '',
    description: '',
    gender: '',
    category: "",
    size: '',
    karatage: "",
    ocassion: '',
    metal: '',
    discount: 0,
  };
  const [show, setShow] = useState(false);
  const [imgPrev, setImgPrev] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const files = e.target.files;

    const fileArray = Array.from(files);

    const imagePreview = fileArray.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve({
            src: reader.result,
            name: file.name,
          })
        }
        reader.readAsDataURL(file)
      })
    })
    Promise.all(imagePreview).then(image => {
      setImgPrev(image)
      setSelectedFile(fileArray);

    })
  }


  const addproduct = async () => {
    try {
      const allFormData = new FormData();
      allFormData.append("folder", 'productImg');

      selectedFile.forEach(file => {
        allFormData.append('image', file)
      })
      for (let key in formData) {
        allFormData.append(key, formData[key]);
      }
      const config = {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }
      const res = await axios.post('http://localhost:5000/product/addproduct', allFormData, config);
      if (res.data.status) {
        dispatch(showToast({ message: "product added successfully", type: "success" }));

      }
      setFormData(initialState);
      setImgPrev([]);
      setSelectedFile([]);
      setShow(false);
    } catch (error) {
      dispatch(showToast({ message: "failed to add product", type: "error" }));
      console.log(error);
    }
  }
  return (
    <>
      <CreateProduct
        formData={formData} setFormData={setFormData} handleImageChange={handleImageChange} addProduct={addproduct} imgPrev={imgPrev}
      />
      <ProductList />
      <ProductData />
    </>
  )
}
export default Product



 