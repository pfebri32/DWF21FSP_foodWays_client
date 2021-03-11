// Styles.
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const {
        id,
        name,
        price,
        img,
    } = product;
    const onOrderClick = () => {
        alert(`
            You order some food.\n
            Name: ${name}\n
            Price: ${price}\n
        `);
    };
    return (
        <div className='pc__container'>
            <div className='pc__image'>
                <img src={img} alt={name}/>
            </div>
            <div className='pc__content'>
                <div className='pc__name'>{ name }</div>
                <div className='pc__price'>{ `Rp ${price}` }</div>
            </div>
            <div className='pc__order' onClick={onOrderClick}>Order</div>
        </div>
    )
}

export default ProductCard;
