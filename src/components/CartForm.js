import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

// Styles.
import '../styles/CartForm.css';

// Data.
import { cart as cartData, getOrders, getRestaurantById } from '../data/dummy';

const CartForm = ({ style }) => {
    const [cart, setCarts] = useState(getOrders());
    const restaurant = getRestaurantById(cartData.restaurantId);
    const {
        location,
        totalOrders,
        ordersPrice,
        deliveryPrice,
        totalPrice,
        orders,
    } = cart;
    const renderOrders = () => (
        orders.map(({id, name, price, quantity, img}) => (
            <div className='cf__order' key={id}>
                <div className='cf__order-container'>
                    <div className='cf__order-image'>
                        <img src={img} alt={name}/>
                    </div>
                    <div className='cf__order-content'>
                        <div className='cf__order-content-group' style={{marginTop: 14}}>
                            <div className='cf__order-name'>{ name }</div>
                            <div className='cf__order-price'>{ `Rp ${price}` }</div>
                        </div>
                        <div className='cf__order-content-group'>
                            <div className='cf__order-quantity'>
                                <div className='cf__order-form-button'>-</div>
                                <input name='quantity' type='number' value={quantity}/>
                                <div className='cf__order-form-button'>+</div>
                            </div>
                            <div className='cf__order-delete'>
                                <img src='/assets/trash.svg' alt='Delete Order'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
    return (
        <div style={style}>
            <Container>
                <div className='app__header'>{ restaurant.name }</div>
                <div style={{marginTop: 30}}>
                    <div className='cf__label-location'>Delivery Location</div>
                    <div className='cf__location-group'>
                        <div className='cf__location-field'>{ location }</div>
                        <div className='cf__location-button'>Select On Map</div>
                    </div>
                    <div className='cf__order-group'>
                        <div className='cf__order-title'>Review Your Order</div>
                        <Row style={{marginTop: 9}}>
                            <div className='cf__order-list'>
                                { renderOrders() }
                            </div>
                            <div className='cf__order-info'>
                                <div className='cf__order-detail'>
                                    <div className='cf__info-group'>
                                        <div className='cf__info-label'>Subtotal</div>
                                        <div className='cf__info-value' style={{color: '#ff0000'}}>{`Rp ${ordersPrice}`}</div>
                                    </div>
                                    <div className='cf__info-group'>
                                        <div className='cf__info-label'>Qty</div>
                                        <div className='cf__info-value'>{ totalOrders }</div>
                                    </div>
                                    <div className='cf__info-group'>
                                        <div className='cf__info-label'>Ongkir</div>
                                        <div className='cf__info-value' style={{color: '#ff0000'}}>{`Rp ${deliveryPrice}`}</div>
                                    </div>
                                </div>
                                <div className='cf__order-total'>
                                    <div className='cf__info-label'>Total</div>
                                    <div className='cf__info-value'>{`Rp ${totalPrice}`}</div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
                <div className='cf__footer'>
                    <div className='cf__location-distance'>See How Far ?</div>
                </div>
            </Container>
        </div>
    )
}

export default CartForm;
