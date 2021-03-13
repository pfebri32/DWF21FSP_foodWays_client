import { Col, Container, Row } from "react-bootstrap";

// Components.
import RestaurantCard from "./RestaurantCard";

// Data.
import { getMostPopularRestaurants } from '../data/dummy';
import BrandCard from "./Card/BrandCard";

const PopularRestaurant = ({ style }) => {
    const renderRestaurants = () => (
        getMostPopularRestaurants(0, 4).map(({name, logo, id}) => (
            <Col lg='3' key={id}>
                <BrandCard name={name} logo={logo}/>
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
