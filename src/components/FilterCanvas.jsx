import React, { useState } from 'react';
import { Offcanvas, Accordion, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sortoffcanvasshow } from '../Store/slice/Offcanvas_slice';
import { showToast } from '../Store/slice/ToastSlice'
import { setgetfilter } from '../Store/slice/FilterSlice';

const FilterCanvas = () => {
  const show = useSelector((state) => state.offcanvasmenu.sortShow);
  const categorydata = useSelector((state) => state.productdata.category);
  const genderdata = useSelector((state) => state.productdata.gender);
  const metaldata = useSelector((state) => state.productdata.metal);
  const ocassiondata = useSelector((state) => state.productdata.ocassion);
  
  const [selectedFilters, setSelectedFilters] = useState([])

  const data = [
    { name: 'Category', data: categorydata },
    { name: 'Gender', data: genderdata },
    { name: 'Metal', data: metaldata },
    { name: 'Ocassion', data: ocassiondata },
    {name:"Karatage",data:['18K','22K']}
  ];
  const dispatch = useDispatch();
  const handleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      if (!prev.includes(value)) return [...prev, value];
      return prev;
    })
    dispatch(setgetfilter({ type, value }))
    dispatch(sortoffcanvasshow())
  }
  const handleClearFilters = () => {
    setSelectedFilters([]);
    dispatch(setgetfilter({type:null,value:null}));
    dispatch(showToast({ message: 'Filters got cleared', type: 'success' }))
    dispatch(sortoffcanvasshow())
  }


  return (
    <>
      <Offcanvas show={show} onHide={() => dispatch(sortoffcanvasshow())} className='bg-color'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: 'var(--section-heading)' }} className=' fw-bolder'>Filter Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion>
            {data.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header className=' fw-bolder'>{item.name}</Accordion.Header>
                <Accordion.Body>
                  {item.data && item.data.length > 0 ? (
                    item.data.map((option, idx) => {
                      const label =
                        option.categoryname ||
                        option.gendername ||
                        option.metalname ||
                        option.ocassionname ||
                        option;

                      return (
                        <Form.Check
                          key={idx}
                          type="radio"
                          label={label}
                          className="mb-2 text-capitalize"
                          id={option._id}
                          name={`${item.name.toLowerCase()}Filter`}
                          onClick={() => handleFilter(item.name, label)}
                        />
                      );
                    })
                  ) : (
                    <div>No options available</div>
                  )}

                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <div className='border-raidus mx-2 mt-5 cursor'>
            <p className='mb-0 text-nowrap' onClick={handleClearFilters}>Clear Filters</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterCanvas;
