import { useContext, useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Contexts.
import { UserContext } from '../contexts/userContext';

// Components.
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';

// Styles.
import '../styles/Navbar.css';
import '../styles/Modal.css';
import { CartContext } from '../contexts/cartContext';

const Navbar = () => {
    // Contexts.
    const [userState] = useContext(UserContext);
    const [cartState] = useContext(CartContext);

    // States and variables.
    const [show, setShow] = useState(false);
    const [hasAccount, setHasAccount] = useState(false);

    // Handlers.
    const handleClose = () => setShow(false);
    const handleOpenLogin = () => {
        setHasAccount(true);
        setShow(true);
    };
    const handleOpenRegister = () => {
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
                                userState.isLogin ? (
                                    <>
                                        <Link  className='navbar__icon-link navbar__cart-basket' to='/cart'>
                                            <img src='/assets/basket.svg' alt='Cart Icon'/>
                                            {
                                                cartState.orders.length !== 0 && <div className='navbar__cart-counter'>{ cartState.orders.length }</div>
                                            }
                                        </Link>
                                        <div className='navbar__user-profile'>
                                            <img src='/assets/profile.jpg' alt='User Profile'/>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='navbar__link' onClick={handleOpenRegister}>Register</div>
                                        <div className='navbar__link' onClick={handleOpenLogin}>Login</div>
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
                        <LoginForm onSwitch={handleOpenRegister} onModalClose={handleClose}/> 
                    : 
                        <RegisterForm onSwitch={handleOpenLogin} onModalClose={handleClose}/> 
                }
            </Modal>
        </>
    )
}

export default Navbar;
