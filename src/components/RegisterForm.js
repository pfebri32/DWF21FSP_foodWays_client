import { useState } from 'react';

// Styles.
import '../styles/Form.css';

const RegisterForm = ({ onSwitch }) => {
    // States and Variables.
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
    const onChange = (e) => {
        const name = e.target.name;
        setForm({
            ...form,
            [name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        alert(`
            You pressed submit.\n
            Email: ${email}\n
            Password: ${password}\n
            Full Name: ${name}\n
            Gender: ${gender}\n
            Phone: ${phone}\n
            As User: ${role}\n
        `);
    }
    return (
        <div className='Form'>
            <div className='form__header'>Register</div>
            <form onSubmit={onSubmit}>
                <div>
                    <div className='form__input-group'>
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='Email' 
                            value={email}
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='password' 
                            type='password' 
                            placeholder='Password' 
                            value={password}
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='name' 
                            type='text' 
                            placeholder='Full Name' 
                            value={name}
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='gender' 
                            type='text' 
                            placeholder='Gender' 
                            value={gender}
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form__input-group'>
                        <input 
                            name='phone' 
                            type='text' 
                            placeholder='Phone' 
                            value={phone}
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form__input-group form__select-group'>
                        <select name='role' onChange={onChange}>
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
