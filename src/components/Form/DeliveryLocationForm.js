import { Row } from "react-bootstrap";

// Styles.
import '../../styles/Form.css';

const DeliveryLocationForm = ({ placeholder, value }) => {
    return (
        <>
            <div className='form__location-header'>Delivery Location</div>
            <Row style={{marginTop: 15}}>
                <div className='form__location-field'>{ value ? value : placeholder}</div>
                <div className='form__location-button'>
                    <div className='form__location-title'>Select On Map</div>
                    <div className='form__location-icon'><img src='/assets/map.svg' alt='Map Icon'/></div>
                </div>
            </Row>
        </>
    )
}

export default DeliveryLocationForm;
