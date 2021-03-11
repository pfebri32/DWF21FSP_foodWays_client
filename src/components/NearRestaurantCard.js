import { Link } from "react-router-dom";

// Styles.
import '../styles/NearRestaurantCard.css';

const NearRestaurantCard = ({ restaurant}) => {
    const {
        id,
        name,
        distance,
        img,
    } = restaurant;
    return (
        <Link className='nrc__container' to={`/restaurant/${id}`}>
            <div className='nrc__preview'>
                <img src={img} alt={name}/>
            </div>
            <div className='nrc__content'>
                <div className='nrc__brand'>{ name }</div>
                <div className='nrc__distance'>{ `${distance} KM` }</div>
            </div>
        </Link>
    )
}

export default NearRestaurantCard;
