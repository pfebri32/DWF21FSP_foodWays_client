import { Link } from 'react-router-dom';

import '../../styles/Card/HistoryCard.css';

const HistoryCard = ({ name, day, date, cost, status, to }) => {
    return (
        <Link className='hc__card normalize' to={to}>
            <div className='hc__left'>
                <div className='hc__name'>{ name }</div>
                <div className='hc__date'>
                    <span>{ day }</span>, { date }
                </div>
                <div className='hc__cost'>{ `Total: ${cost}` }</div>
            </div>
            <div className='hc__right'>
                <div className='hc__logo'><img src='/assets/logo.svg' alt='Logo'/></div>
                <div className='hc__status'>{ status }</div>
            </div>
        </Link>
    )
}

export default HistoryCard;
