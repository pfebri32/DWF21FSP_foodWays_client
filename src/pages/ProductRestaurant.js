import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";


// Data.
import { getRestaurantById, getRestaurantMenus } from '../data/dummy';

const ProductRestaurant = () => {
    const { id } = useParams();
    const restaurant = getRestaurantById(id);
    const { name } = restaurant;
    const renderProducts = () => (
        getRestaurantMenus(id).map(product => (
            <Col lg='3' key={product.id} style={{marginBottom: 42}}>
            </Col>
        ))
    );
    return (
        <>
            <Container style={{marginTop: 73, marginBottom: 14}}>
                <div className='app__header'>{ `${name},Menus` }</div>
                <Row style={{marginTop: 30}}>
                    { renderProducts() }
                </Row>
            </Container>
        </>
    )
}

export default ProductRestaurant;
