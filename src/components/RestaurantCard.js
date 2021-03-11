import { Link } from 'react-router-dom';
import '../styles/RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
    const {
        id,
        name,
        logo,
    } = restaurant;
    return (
        <Link className='rc__container' to={`/restaurant/${id}`}>
            <div className='rc__logo'>
                <img src={logo} alt={name}/>
            </div>
            <div className='rc__brand'>{ name }</div>
        </Link>
    )
}

export default RestaurantCard;
