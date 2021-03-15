import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

// Contexts.
import { UserContext } from '../../contexts/userContext';

// Styles.
import '../../styles/Form.css';

const LoginForm = ({ onSwitch, onModalClose }) => {
    // Contexts.
    // eslint-disable-next-line
    const [state, dispatch] = useContext(UserContext);

    // States and Variables.
    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = form;

    // Handlers.
    const handleChange = (e) => {
        const name = e.target.name;
        setForm({
            ...form,
            [name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN',
            payload: {
                email,
                password,
                name: 'Mr Default',
                gender: 'Male',
                phone: '088812344321',
                role: 'user',
                location: {
                    name: 'Jakarta',
                    coordinate: {
                        lat: -6.1537,
                        lng: 106.8176,
                    },
                },
            },
        });
        onModalClose && onModalClose();
        history.push('/');
    }
    return (
        <div className='Form'>
            <div className='form__header'>Login</div>
            <form onSubmit={handleSubmit}>
                <div className='form__input-container'>
                    <div className='form__input-group'>
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='Email' 
                            value={email}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='password' 
                            type='password' 
                            placeholder='Password' 
                            value={password}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <input className='form__submit' type='submit' value='Submit'/>
            </form>
            <div className='form__footer'>
                <div className='form__link' onClick={onSwitch}>
                    Don't have an account? Click <span>Here</span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;