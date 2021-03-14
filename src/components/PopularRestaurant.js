import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

// Contexts.
import { RestaurantContext } from '../contexts/retaurantContext';

// Components.
import BrandCard from "./Card/BrandCard";

const PopularRestaurant = ({ style }) => {
    const [state] = useContext(RestaurantContext);
    const { restaurants } = state;
    const renderRestaurants = () => {
        const sorted = restaurants.sort((a, b) => a.popularRank - b.popularRank);
        const result = sorted.slice(0, 4);
        return result.map(({ id, logo, name }) => (
            <Col lg='3' key={id}>
                <BrandCard name={name} logo={logo} to={`/shop/${id}`}/>
            </Col>
        ));
    };
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
