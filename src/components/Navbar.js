import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Components.
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

// Styles.
import '../styles/Navbar.css';
import '../styles/Modal.css';

const Navbar = () => {
    // States and variables.
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
                            <div className='navbar__link' onClick={onOpenRegister}>Register</div>
                            <div className='navbar__link' onClick={onOpenLogin}>Login</div>
                        </div>
                    </div>
                </Container>
            </div>

            <div style={{
                backgroundColor: '#ffc700',
                height: 91,
                width: '100%',
            }}/>

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
