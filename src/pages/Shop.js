import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

// Contexts.
import { RestaurantContext } from '../contexts/retaurantContext';
import { CartContext } from "../contexts/cartContext";

// Components.
import ProductCard from "../components/Card/ProductCard";

const Menu = () => {
    // Contexts.
    const [restaurantState] = useContext(RestaurantContext);
    const [cartState, cartDispatch] = useContext(CartContext);

    // Vars and States.
    const { id } = useParams();
    const { restaurants, menus } = restaurantState;
    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id));
    const { name } = restaurant;

    // Renders.
    const renderMenus = () => {
        const filtered = menus.filter(({restaurantId}) => restaurantId === parseInt(id));
        return filtered.map(menu => (
            <Col lg='3' key={menu.id} style={{marginBottom: 30}}>
                <ProductCard data={menu} type='order' img={menu.img} onOrder={handleOrder}/>
            </Col>
        ));
    };

    // Handlers.
    const handleOrder = (menu) => {
        cartDispatch({
            type: 'ADD_CART',
            payload: menu,
        });
    };
    return (
        <>
            <Container style={{marginTop: 60, marginBottom: 60}}>
                <div className='app__header'>{ `${name},Menus` }</div>
                <Row style={{marginTop: 30}}>
                    { renderMenus() }
                </Row>
            </Container>
        </>
    )
}

export default Menu;
