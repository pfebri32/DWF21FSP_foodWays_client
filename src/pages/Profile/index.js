import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Contexts.
import { HistoryContext } from "../../contexts/historyContext";
import { UserContext } from "../../contexts/userContext";

// Components.
import HistoryCard from '../../components/Card/HistoryCard';

// Styles.
import '../../styles/Profile.css';

const Index = () => {
    // Contexts.
    const [userState] = useContext(UserContext);
    const [historyState] = useContext(HistoryContext);

    // Vars and States.
    const { user } = userState;
    const { carts } = historyState;
    const isPartner = user.role === 'partner';
    const renderHistories = () => (
        carts.map(({ id, totalCost, name, day, date }) => (
            <HistoryCard
                key={id}
                name={name} 
                day={day} 
                date={date} 
                cost={totalCost} 
                to={`/order/${id}`}
                status='Finished'
            />
        ))
    );
    return (
        <>
            <Container style={{marginTop: 60, marginBottom: 60}}>
                <Row>
                    <div className='profile__info'>
                        <div className='app__header'>{ isPartner ? 'Profile Partner' : 'My Profile'}</div>
                        <div className='profile__content'>
                            <div className='profile__left'>
                                <div className='profile__image'><img src='/assets/profile.jpg' alt='Profile'/></div>
                                <Link className='profile__button normalize' to='/profile/edit'>Edit Profile</Link>
                            </div>
                            <div className='profile__right'>
                                <div className='profile__info-group'>
                                    <div className='profile__info-label'>Name{ isPartner && ' Partner' }</div>
                                    <div className='profile__info-value'>{ user.name }</div>
                                </div>
                                <div className='profile__info-group'>
                                    <div className='profile__info-label'>Email</div>
                                    <div className='profile__info-value'>{ user.email }</div>
                                </div>
                                <div className='profile__info-group'>
                                    <div className='profile__info-label'>Phone</div>
                                    <div className='profile__info-value'>{ user.phone }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile__history'>
                        <div className='app__header'>{ isPartner ? 'History Order' : 'History Transaction'}</div>
                        <div className='profile__history-list'>
                            { renderHistories() }
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Index;
