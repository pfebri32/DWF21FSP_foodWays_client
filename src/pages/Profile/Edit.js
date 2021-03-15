import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import DeliveryLocationForm from '../../components/Form/DeliveryLocationForm';

// Contexts.
import { UserContext } from '../../contexts/userContext';

import '../../styles/Form.css';

const Edit = () => {
    // Contexts.
    // eslint-disable-next-line
    const [state, dispatch] = useContext(UserContext);

    // States and Variables.
    const history = useHistory();
    const [form, setForm] = useState({
        email: '',
        name: '',
        gender: '',
        phone: '',
        file: '',
    });
    const { email, name, gender, phone, file } = form;
    const { user } = state;
    const { location, role } = user;

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
            type: 'UPDATE_PROFILE',
            payload: {
                name,
                email,
                gender,
            },
        });
        history.push('/profile');
    }
    return (
        <Container style={{marginTop: 60, marginBottom: 0}}>
            <div className='app__header'>{ `Edit Profile${role === 'partner' ? ' Partner' : ''}` }</div>
            <div className='form__container' style={{marginTop: 30}}>
                <form onSubmit={handleSubmit}>
                    <div className='form__input-group form__input-group-row'>
                        <input 
                            name='name' 
                            type='text' 
                            placeholder='Full Name' 
                            value={name}
                            onChange={handleChange} 
                        />
                        <div className='form__input-file'>
                            <input type="file" name="file" id="file" className="form__inputfile" />
                            <label for="file">
                                Choose a file
                                <img src='/assets/attach.svg' alt='icon file'/>
                            </label>
                        </div>
                    </div>
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
                            name='phone' 
                            type='phone' 
                            placeholder='Phone' 
                            value={phone}
                            onChange={handleChange} 
                        />
                    </div>
                    <DeliveryLocationForm
                        placeholder='Location' 
                        value={location.name}
                        coordinate={location.coordinate}
                        formStyle={true}
                    />
                    <input className='form__submit' type='submit' value='Save'/>
                </form>
            </div>
        </Container>
    )
}

export default Edit;
