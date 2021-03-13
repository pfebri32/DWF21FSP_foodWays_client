import { useState } from 'react';

// Styles.
import '../../styles/Form.css';

const Login = ({ onSwitch }) => {
    // States and Variables.
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const { email, password } = form;

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
        `);
    }
    return (
        <div className='Form'>
            <div className='form__header'>Login</div>
            <form onSubmit={onSubmit}>
                <div className='form__input-container'>
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

export default Login;