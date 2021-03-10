import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';

import '../styles/Modal.css';

const __Demo = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal 
                centered
                show={show}
                contentClassName='modal__content'
                dialogClassName='modal__dialog'
                onHide={handleClose}
            >
                <LoginForm/>
            </Modal>
        </>
    )
}

export default __Demo;
