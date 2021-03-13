import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components.
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';

// Styles.
import '../styles/Navbar.css';
import '../styles/Modal.css';

const Navbar = () => {
    // States and variables.
    const [isLogin, setIsLogin] = useState(true);
    const [show, setShow] = useState(false);
    const [hasAccount, setHasAccount] = useState(false);

    // Handlers.
    const handleClose = () => setShow(false);
    const onOpenLogin = () => {
        setHasAccount(true);
        setShow(true);
    };
    const onOpenRegister = () => {
        setHasAccount(false);
        setShow(true);
    };
    return (
        <>
            <div className='Navbar'>
                <Container>
                    <div className='navbar__navs'>
                        <div className='navbar__logo'>
                            <Link to='/'>
                                <img src='/assets/logo.svg' alt='Foodways Logo'/>
                            </Link>
                        </div>
                        <div className='navbar__menus'>
                            {
                                isLogin ? (
                                    <>
                                        <Link  className='navbar__icon-link' to='/cart'>
                                            <img src='/assets/basket.svg' alt='Cart Icon'/>
                                        </Link>
                                        <div className='navbar__user-profile'>
                                            <img src='/assets/profile.jpg' alt='User Profile'/>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='navbar__link' onClick={onOpenRegister}>Register</div>
                                        <div className='navbar__link' onClick={onOpenLogin}>Login</div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </Container>
            </div>

            <div className='navbar__fixed-filler'/>

            <Modal 
                centered
                show={show}
                contentClassName='modal__content'
                dialogClassName='modal__dialog'
                onHide={handleClose}
            >
                { 
                    hasAccount ? 
                        <LoginForm onSwitch={onOpenRegister}/> 
                    : 
                        <RegisterForm onSwitch={onOpenLogin}/> 
                }
            </Modal>
        </>
    )
}

export default Navbar;
