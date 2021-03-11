import { Col, Container, Row } from "react-bootstrap";

// Components.
import NearRestaurantCard from "./NearRestaurantCard";

// Data.
import { getNearestRestaurant } from '../data/dummy';

const NearestRestaurant = ({ style }) => {
    const renderRestaurants = () => (
        getNearestRestaurant(0, 4).map(restaurant => (
            <Col lg='3' key={restaurant.id}>
                <NearRestaurantCard restaurant={restaurant}/>
            </Col>
        ))
    );
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
