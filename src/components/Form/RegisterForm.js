import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

// Contexts.
import { UserContext } from '../../contexts/userContext';

// Styles.
import '../../styles/Form.css';

const RegisterForm = ({ onSwitch, onModalClose }) => {
    // Contexts.
    const [dispatch] = useContext(UserContext);

    // States and Variables.
    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        gender: '',
        phone: '',
        role: 'user',
    });
    const { email, password, name, gender, phone, role } = form;

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
                name,
                gender,
                phone,
                role,
            },
        });
        onModalClose && onModalClose();
        history.push('/');
    }
    return (
        <div className='Form'>
            <div className='form__header'>Register</div>
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
                    <div className='form__input-group'>
                        <input 
                            name='name' 
                            type='text' 
                            placeholder='Full Name' 
                            value={name}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='gender' 
                            type='text' 
                            placeholder='Gender' 
                            value={gender}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='phone' 
                            type='text' 
                            placeholder='Phone' 
                            value={phone}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='form__input-group form__select-group'>
                        <select name='role' onChange={handleChange}>
                            <option value='user'>Customer</option>
                            <option value='partner'>Restaurant</option>
                        </select>
                        <img className='form__select-arrow' src='/assets/polygon.png' alt=''/>
                    </div>
                </div>
                <input className='form__submit' type='submit' value='Submit'/>
            </form>
            <div className='form__footer'>
                <div className='form__link' onClick={onSwitch}>
                    Already have an account? Click <span>Here</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
