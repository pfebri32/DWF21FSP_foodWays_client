import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

// Contexts.
import { RestaurantContext } from "../../contexts/retaurantContext";
import { HistoryContext } from "../../contexts/historyContext";

// Components.
import DeliveryLocationForm from "../../components/Form/DeliveryLocationForm";
import CartOrderCard from "../../components/Card/CartOrderCard";

// Styles.
import '../../styles/Cart.css';

const Cart = () => {
    // Contexts.
    // eslint-disable-next-line
    const [restaurantState, restaurantDispatch] = useContext(RestaurantContext);
    // eslint-disable-next-line
    const [historyState, historyDispatch] = useContext(HistoryContext);

    // Vars and States.
    const { id } = useParams();
    const cart = historyState.carts.find(cart => cart.id === parseInt(id));
    const { restaurants } =  restaurantState;
    const { 
        restaurantId, 
        orders, 
        deliveryCost, 
        totalCost, 
        totalPrice, 
        location,  
        totalQuantity,
    } = cart;
    const restaurant = restaurants.find(({ id }) => id === restaurantId);

    // Renders.
    const renderOrders = () => (
        orders.map(({name, quantity, id, price, img}) => (
            <CartOrderCard 
                key={id}
                id={id}
                img={img}
                name={name}
                price={price}
                quantity={quantity}
            />
        ))
    );
    return (
        <>
            <Container style={{marginTop: 60, marginBottom: 60}}>
                {
                    restaurant && orders.length !== 0 ? (
                        <>
                            <div className='app__header'>{ restaurant.name }</div>
                            <div style={{marginTop: 30}}>
                                <DeliveryLocationForm
                                    placeholder='Pick Your Location' 
                                    value={location.name}
                                    coordinate={location.coordinate}
                                />
                            </div>
                            <div style={{marginTop: 30}}>
                                <div className='cart__title'>Review Your Order</div>
                                <Row style={{marginTop: 15}}>
                                    <div className='cart__orders'>
                                        { renderOrders() }
                                    </div>
                                    <div className='cart__info'>
                                        <div className='cart__detail-group'>
                                            <div className='cart__info-group'>
                                                <div className='cart__info-label'>Subtotal</div>
                                                <div className='cart__info-value app__text-red'>{ `Rp ${totalPrice}` }</div>
                                            </div>
                                            <div className='cart__info-group'>
                                                <div className='cart__info-label'>Qty</div>
                                                <div className='cart__info-value'>{ totalQuantity }</div>
                                            </div>
                                            <div className='cart__info-group'>
                                                <div className='cart__info-label'>Ongkir</div>
                                                <div className='cart__info-value app__text-red'>{ `Rp ${deliveryCost}` }</div>
                                            </div>
                                        </div>
                                        <div className='cart__total-group'>
                                            <div className='cart__info-group app__text-red app__text-bold'>
                                                <div className='cart__info-label'>Total</div>
                                                <div className='cart__info-value'>{ `Rp ${totalCost}` }</div>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className='cart__button'>See How Far ?</div>
                        </>
                    ) : (
                        <div className='app__header'>Empty</div>
                    )
                }
            </Container>
        </>
    )
}

export default Cart;
