import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

// Contexts.
import { RestaurantContext } from "../contexts/retaurantContext";

// Components.
import ProductCard from "./Card/ProductCard";

// Data.
import { getNearestRestaurant } from '../data/dummy';

const NearestRestaurant = ({ style }) => {
    const [state] = useContext(RestaurantContext);
    console.log(state);
    const renderRestaurants = () => {
        const sortedRestaurantsByDistanceAsc = state.restaurants.sort((a, b) => a.distance - b.distance);
        const result = sortedRestaurantsByDistanceAsc.slice(0, 4);
        return (
            result.map(restaurant => (
                <Col lg='3' key={restaurant.id}>
                    <ProductCard data={restaurant} img={restaurant.img}/>
                </Col>
            ))
        );
    };
    return (
        <div style={style}>
            <Container>
                <div className='app__header'>Restaurant Near You</div>
                <Row style={{marginTop: 30}}>
                    { renderRestaurants() }
                </Row>
            </Container>
        </div>
    )
}

export default NearestRestaurant;
