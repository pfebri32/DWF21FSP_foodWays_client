import { Col, Container, Row } from "react-bootstrap";

// Components.
import RestaurantCard from "./RestaurantCard";

// Data.
import { getMostPopularRestaurants } from '../data/dummy';

const PopularRestaurant = ({ style }) => {
    const renderRestaurants = () => (
        getMostPopularRestaurants(0, 4).map(restaurant => (
            <Col lg='3' key={restaurant.id}>
                <RestaurantCard restaurant={restaurant}/>
            </Col>
        ))
    );
    return (
        <div style={style}>
            <Container>
                <div className='app__header'>Popular Restaurant</div>
                <Row style={{marginTop: 30}}>
                    { renderRestaurants() }
                </Row>
            </Container>
        </div>
    )
}

export default PopularRestaurant;
