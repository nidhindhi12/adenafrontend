
import { Offcanvas, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchToggleShow } from '../Store/slice/Offcanvas_slice';
import {storeSearchTerm} from '../Store/slice/FilterSlice'


const Searchbox = () => {
    const search = useSelector((state) => state.offcanvasmenu.searchShow);
    const dispatch = useDispatch();
    const searchTerm=useSelector((state)=>state.filterproduct.searchTerm);

    return (
        <Offcanvas show={search} onHide={() => dispatch(searchToggleShow())} placement="top"
            style={{ backgroundColor: 'var(--header-bg-color)' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className=' fw-bolder fs-4' style={{ color: 'var(-icon-color' }}>Search</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className=' text-center'>
                <input type="Search" placeholder='Search here....' className='w-75 py-2 rounded-2 border' value={searchTerm} onChange={(e)=>dispatch(storeSearchTerm(e.target.value))} />
                <Button>Search</Button>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Searchbox
