import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { UserContext } from '../../contexts/userContext';

import '../../styles/Form.css';

const Add = () => {
    // Contexts.
    const [state, dispatch] = useContext(UserContext);

    // States and Variables.
    const [form, setForm] = useState({
        title: '',
        price: 0,
        file: '',
    });
    const { title, price, file } = form;

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
    }
    return (
        <>
            {
                state.user.role === 'partner' ? (
                    <Container style={{marginTop: 60, marginBottom: 0}}>
                        <div className='app__header'>Add Product</div>
                        <div className='form__container' style={{marginTop: 30}}>
                            <form onSubmit={handleSubmit}>
                                <div className='form__input-group form__input-group-row'>
                                    <input 
                                        name='title' 
                                        type='text' 
                                        placeholder='Title' 
                                        value={title}
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
                                        name='price' 
                                        type='number' 
                                        placeholder='Price' 
                                        value={price}
                                        onChange={handleChange} 
                                    />
                                </div>
                                <input className='form__submit' type='submit' value='Save'/>
                            </form>
                        </div>
                    </Container>
                ) : <Redirect to='/'/>
            }
        </>
    )
}

export default Add;
