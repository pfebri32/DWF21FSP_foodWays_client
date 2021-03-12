import { Link } from "react-router-dom";

// Styles.
import '../styles/ProfileDetail.css';

const ProfileDetail = () => {
    return (
        <>
            <div className='app__header'>My Profile</div>
            <div className='app__row' style={{marginTop: 32}}>
                <div className='profile__image'><img src='/assets/profile.jpg' alt='Profile'/></div>
                <div className='profile__info'>
                    <div className='info__group'>
                        <div className='title'>Full Name</div>
                        <div className='info'>Andi</div>
                    </div>
                    <div className='info__group'>
                        <div className='title'>Email</div>
                        <div className='info'>andigans@gmail.com</div>
                    </div>
                    <div className='info__group'>
                        <div className='title'>Phone</div>
                        <div className='info'>083896833122</div>
                    </div>
                </div>
            </div>
            <Link className='app__button profile__button' to='/'>Edit Profile</Link>
        </>
    )
}

export default ProfileDetail;
