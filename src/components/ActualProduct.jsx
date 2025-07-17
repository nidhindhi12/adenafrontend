import { Row, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingBagThin } from "react-icons/pi";
import 'react-tooltip/dist/react-tooltip.css';
import ProductView from './ProductView';
import { toggleproductview } from '../Store/slice/ModaSlice';
import {  useParams } from 'react-router-dom';
import { addToWishlist } from './wishfun';
import { handleaddproduct } from './Addproduct';


const ActualProduct = () => {
    const products = useSelector((state) => state.filterproduct.products);

    const isLoading = !products || products.length === 0;
    const dispatch = useDispatch();
    const { itemName } = useParams();
    const searchTerm = useSelector((state) => state.filterproduct.searchTerm);
    const getFilterType = (itemName) => {
    const map = {
        gold: 'metal',
        diamond: 'metal',
        silver: 'metal',
        platinum: 'metal',
        earrings: 'category',
        rings: 'category',
        chains: 'category',
        bracelets: 'category',
        bangles: 'category',
        anklets: 'category',
        mangalsutras: 'category',
        necklaces: 'category',
        'daily wear': 'ocassion',
        wedding: 'ocassion',
        party: 'ocassion',
        festive: 'ocassion',
        men: 'gender',
        women: 'gender',
        kids: 'gender',
        '18k': 'karatage',
        '22k': 'karatage',
    };

    return map[itemName.toLowerCase().trim()] || null;
};

    const filteritem = getFilterType(itemName);
    
    // navbar filter
    let filterproducts = filteritem ? products.filter((item) => item[filteritem]?.toLowerCase().trim() === itemName.toLowerCase().trim()) : products;
  
    // filter canvas
    const filterItem = useSelector((state) => state.filterproduct.getfilter);
    const filteredFinal = filterItem?.type && filterItem?.value ? filterproducts.filter(item =>
        item[filterItem.type.toLowerCase()]?.toLowerCase().trim() === filterItem.value.toLowerCase().trim()) : filterproducts;
    filterproducts = filteredFinal;

      console.log('gggg',filteredFinal)
    // search logic
    let filtered = products
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filterproducts = filtered.filter(item => item.description.toLowerCase().includes(term));
    }

    const handleView = (item) => {
        dispatch(toggleproductview(item));
    }
    const productview = useSelector((state) => state.modalMenu.productview)
    return (
        <div>
            {
                isLoading ? (
                    <div className='loader fs-14'>
                        <img src="https://res.cloudinary.com/dtfn7ppzg/image/upload/v1749984592/Loder-gazelle_zk6pgj.gif" alt="" />
                    </div>
                ) : (
                    <Row className=' flex-wrap justify-content-center col-gap-2 gap-4 mx-0'>
                        <p className=' text-center mt-3 fs-5 fw-medium'>Total Products:{filterproducts.length}</p>
                        {
                            filterproducts.map((item, index) => (
                                <Card style={{ width: '16rem' }} className='mt-4 px-0 border-0 
                                card-shadow bg-transparent' key={index}>
                                    <div className='product-image-wrapper'>
                                        <img src={item.image[0].url} className='img-fluid first-img '
                                            style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
                                        <img
                                            src={item.image[1]?.url || item.image[0].url}
                                            className='img-fluid hover-img position-absolute top-0 start-0'
                                            style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                                            alt='hover' />
                                        <div className='hover-icons'>
                                            <span className='icon-border' title='wishlist' onClick={() => addToWishlist(item._id, dispatch)}><CiHeart /></span>
                                            <span className='mx-3 icon-border' title='add to cart' onClick={() =>handleaddproduct(item,dispatch)}><PiShoppingBagThin /></span>
                                            <span className=' icon-border' title='quickview' onClick={() => handleView(item)}><CiSearch /></span>
                                        </div>
                                    </div>
                                    <div className=' bg-transparent'>
                                        <h5 className='fs-6 p-2 fw-medium text-truncate'>{item.title}</h5>
                                        <Card.Text className=' fw-bold d-flex justify-content-between px-2 pb-'>
                                            <span>&#x20B9; {item.price}</span>
                                            <span className='text-danger'>
                                                {item.discount ? `${item.discount} % Off` : ''}
                                            </span>
                                        </Card.Text>
                                    </div>
                                </Card>
                            ))
                        }
                        {productview && <ProductView />}
                    </Row>
                )
            }
        </div>
    )
}
export default ActualProduct






