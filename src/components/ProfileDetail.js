import { Link } from "react-router-dom";

// Styles.
import '../styles/ProfileDetail.css';

const user = {
    name: 'Andy',
    email: 'andigans@gmail.com',
    phone: '083896833122',
    role: 'user',
};

const ProfileDetail = () => {
    const {
        name,
        email,
        phone,
        role,
    } = user;
    const header = role === 'user' ? 'My Profile' : 'Profile Partner';
    return (
        <>
            <div className='app__header'>{ header }</div>
            <div className='app__row' style={{marginTop: 32}}>
                <div className='profile__image'><img src='/assets/profile.jpg' alt='Profile'/></div>
                <div className='profile__info'>
                    <div className='info__group'>
                        <div className='title'>Full Name</div>
                        <div className='info'>{ name }</div>
                    </div>
                    <div className='info__group'>
                        <div className='title'>Email</div>
                        <div className='info'>{ email }</div>
                    </div>
                    <div className='info__group'>
                        <div className='title'>Phone</div>
                        <div className='info'>{ phone }</div>
                    </div>
                </div>
            </div>
            <Link className='app__button profile__button' to='/'>Edit Profile</Link>
        </>
    )
}

export default ProfileDetail;
