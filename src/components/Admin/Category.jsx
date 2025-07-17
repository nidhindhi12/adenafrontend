import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import COM from './COM';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { changeAdminmodal, fetchSelectedCatId } from '../../Store/slice/ModaSlice';
import { showToast } from "../../Store/slice/ToastSlice";
import { categorydata } from "../../Store/slice/ProductdataSlice";
import { Base_url } from "../BaseUrL";

const Category = () => {
    const dispatch = useDispatch();
    const fetchdata = useSelector((state) => state.productdata.category);

    // ✅ Reusable function to fetch categories
    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${Base_url}/category/categorieswithcount`);
            dispatch(categorydata(res.data.data.data));
        } catch (error) {
            console.error(error);
            dispatch(showToast({ message: 'Failed to fetch categories.', type: "error" }));
        }
    };

    useEffect(() => {
        fetchCategories(); // Fetch categories when component mounts
    }, []);

    // ✅ Open Add Category Modal
    const handleAdminModal = () => {
        dispatch(changeAdminmodal('add'));
    };

    // ✅ Delete category & refetch
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${Base_url}/category/deletecategory/${id}`);
            if (res.data.status) {
                dispatch(showToast({ message: res.data.data.message, type: "success" }));
                fetchCategories(); // Refetch to update the list
            }
        } catch (error) {
            dispatch(showToast({ message: 'Error deleting category.', type: "error" }));
        }
    };

    // ✅ Open Edit Modal with selected category
    const handleEdit = (item) => {
        dispatch(changeAdminmodal('edit'));
        dispatch(fetchSelectedCatId(item));
    };

    return (
        <Container>
            {/* Header */}
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='text-white fw-bold fs-5 py-3'>Category</h4>
                <div className='d-flex text-white'>
                    <Link to='/admin/dashboard' className='text-white'>Dashboard /</Link>
                    <Link className='text-white-50'> Category</Link>
                </div>
            </div>

            {/* Add Category & Total */}
            <div style={{ backgroundColor: 'var(--admin-hover)' }} className='py-2'>
                <div className='d-flex justify-content-between px-4 align-items-center'>
                    <p className="text-white mt-2">Total Products: {fetchdata?.length || 0}</p>
                    <button className='btn btn-color fs-14' style={{ backgroundColor: "transparent" }} onClick={handleAdminModal}>
                        + Add new category
                    </button>
                </div>
                <COM label="Category" placeholder="Enter the Category Name" type='category' onSuccess={fetchCategories} />
                {/* 👆 Pass fetchCategories to COM component if it handles adding/editing */}
            </div>

            {/* Table */}
            <div className='mt-4' style={{ marginBottom: "77px" }}>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-white">Icon</th>
                            <th className="text-white">Category Name</th>
                            <th className="text-white">Total Products</th>
                            <th className="text-white text-end pe-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchdata?.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <p className="list-icon m-0 text-white ps-3 pt-1">
                                        {item.categoryname?.charAt(0).toUpperCase()}
                                    </p>
                                </td>
                                <td className="text-capitalize text-white">{item.categoryname}</td>
                                <td className="text-white text-center" style={{ width: '15%' }}>{item.totalProducts}</td>
                                <td className='text-end pe-4' style={{ width: '20%' }}>
                                    <FaEdit className="text-success me-3 cursor-pointer" onClick={() => handleEdit(item)} />
                                    <FaTrashAlt className="text-danger cursor-pointer" onClick={() => handleDelete(item.categoryId)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Category;

