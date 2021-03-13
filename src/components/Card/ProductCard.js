import '../../styles/Card/ProductCard.css';

const ProductCard = ({ img, data, type }) => {
    const renderType = () => {
        switch (type) {
            case 'order':
                return null;
            default:
                return (
                    <>
                        <div className='pc__name'>{ data.name }</div>
                        <div className='pc__distance'>{ `${data.distance} KM` }</div>
                    </>
                );
        }
    };
    return (
        <div className='pc__card'>
            <div className='pc__image'><img src={img} alt={img}/></div>
            <div className='pc__content'>
                { renderType() }
            </div>
        </div>
    )
}

export default ProductCard;
