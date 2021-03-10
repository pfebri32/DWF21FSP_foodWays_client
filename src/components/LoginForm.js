import '../styles/Form.css';

const LoginForm = () => {
    return (
        <div className='Form'>
            <div className='form__header'>Login</div>
            <form>
                <div>
                    <div className='form__input-group'>
                        <input name='email' type='email' placeholder='Email'/>
                    </div>
                    <div className='form__input-group'>
                        <input name='password' type='password' placeholder='Password'/>
                    </div>
                </div>
                <input className='form__submit' type='submit' value='Submit'/>
            </form>
            <div className='form__footer'>
                
            </div>
        </div>
    )
}

export default LoginForm;