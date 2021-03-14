import { useContext, useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

// Contexts.
import { CartContext } from "../contexts/cartContext";
import { RestaurantContext } from "../contexts/retaurantContext";

// Components.
import DeliveryLocationForm from "../components/Form/DeliveryLocationForm";

// Styles.
import '../styles/Cart.css';
import CartOrderCard from "../components/Card/CartOrderCard";

const Cart = () => {
    // Contexts.
    const [cartState, cartDispatch] = useContext(CartContext);
    const [restaurantState, restaurantDispatch] = useContext(RestaurantContext);

    // Vars and States.
    const [cart, setCart] = useState(cartState);
    const { restaurantId, orders } = cart;
    const { restaurants } =  restaurantState;
    const restaurant = restaurants.find(({ id }) => id === restaurantId);

    // Handlers.
    const handleQuantityChange = (e) => {
        const index = cart.orders.findIndex(order => order.id === parseInt(e.target.dataset.orderid));
        const order = cart.orders[index];
        const prevQuantity = order.quantity;
        order.quantity = parseInt(e.target.value);
        if (order.quantity < 1 || Number.isNaN(order.quantity)) {
            order.quantity = 1;
        }
        const rangeQuantity = order.quantity - prevQuantity;
        setCart({
            ...cart,
            totalPrice: cart.totalPrice + order.price * rangeQuantity,
            totalQuantity: cart.totalQuantity + rangeQuantity,
            orders: [
                ...cart.orders.slice(0, index),
                order,
                ...cart.orders.slice(index + 1),
            ],
        });
    };

    const handleIncrease = (id, increase) => {
        const index = cart.orders.findIndex(order => order.id === id);
        const order = cart.orders[index];
        let price = order.price;
        order.quantity = order.quantity + increase;
        price *= increase;
        if (order.quantity < 1) {
            price = 0;
            increase = 0;
            order.quantity = 1;
        }
        setCart({
            ...cart,
            totalPrice: cart.totalPrice + price,
            totalQuantity: cart.totalQuantity + increase,
            orders: [
                ...cart.orders.slice(0, index),
                order,
                ...cart.orders.slice(index + 1),
            ],
        });
    };

    const handleDelete = (id) => {
        const index = cart.orders.findIndex(order => order.id === id);
        const filtered = cart.orders.filter(order => order.id !== id);
        const order = cart.orders[index];
        setCart({
            ...cart,
            totalPrice: cart.totalPrice - order.price * order.quantity,
            totalQuantity: cart.totalQuantity - order.quantity,
            orders: filtered,
        });
    };
    
    // Unmount.
    useEffect(() => {
        return () => {
            cartDispatch({
                type: 'UPDATE_CART',
                payload: cart,
            })
        }
    });

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
                onChange={handleQuantityChange}
                onIncrease={() => handleIncrease(id, 1)}
                onDecrease={() => handleIncrease(id, -1)}
                onDelete={() => handleDelete(id)}
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
                                <DeliveryLocationForm placeholder='Pick Your Location'/>
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
                                                <div className='cart__info-value app__text-red'>{ `Rp ${cart.totalPrice}` }</div>
                                            </div>
                                            <div className='cart__info-group'>
                                                <div className='cart__info-label'>Qty</div>
                                                <div className='cart__info-value'>{ cart.totalQuantity }</div>
                                            </div>
                                            <div className='cart__info-group'>
                                                <div className='cart__info-label'>Ongkir</div>
                                                <div className='cart__info-value app__text-red'>{ `Rp 10000` }</div>
                                            </div>
                                        </div>
                                        <div className='cart__total-group'>
                                            <div className='cart__info-group app__text-red app__text-bold'>
                                                <div className='cart__info-label'>Total</div>
                                                <div className='cart__info-value'>{ `Rp 10000` }</div>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className='cart__button'>Order</div>
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
