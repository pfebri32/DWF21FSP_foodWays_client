// Styles.
import '../../styles/Card/BrandCard.css';

const BrandCard = ({ logo, name }) => {
    return (
        <div className='bc__card'>
            <div className='bc__row'>
                <div className='bc__logo'><img src={logo} alt={name}/></div>
                <div className='bc__name'>{ name }</div>
            </div>
        </div>
    )
}

export default BrandCard;
