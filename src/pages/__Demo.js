import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

import '../styles/Modal.css';

const __Demo = () => {
    // States and variables.
    const [show, setShow] = useState(false);
    const [hasAccount, setHasAccount] = useState(true);

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
            <Button variant="primary" onClick={onOpenLogin}>
                Login
            </Button>
            <Button variant="primary" onClick={onOpenRegister}>
                Register
            </Button>
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

export default __Demo;
