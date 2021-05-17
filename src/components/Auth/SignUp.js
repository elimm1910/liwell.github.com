import React, { useState } from 'react';
import styled from 'styled-components';
import { MDBCard } from 'mdbreact';

import { auth, createUserProfileDocument } from './Firebase/firebaseUtil';

//components
import FormInput from './FormInput';

const SignUpStyled = styled.div`
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width:40%;
height:470px;
position: absolute;
.sign-up{
    padding:5%;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
}
.center{
    display:flex;
    justify-content: center;
}
.right{
    text-align: right;
}

@media only screen and (max-width: 600px) {
    width:80%;
}
`


function SignUp({ handleClose }) {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords dont match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            handleClose()

        } catch (error) { console.error(error); }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        name === 'displayName' ?
            setDisplayName(value)
            : name === 'email' ?
                setEmail(value)
                : name === 'password' ?
                    setPassword(value)
                    :
                    setConfirmPassword(value)
    }

    return (
        <SignUpStyled>
            <MDBCard className='sign-up mx-auto'>
                <h2 className='center mt-2'>I do not have a account</h2>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={handleChange}
                        label='name'
                        required />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={handleChange}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={handleChange}
                        label='confirm password'
                        required />
                    <div className='center'>
                        <button type='submit' className="btn btn-danger btn-rounded">Sign Up</button>
                        <button onClick={handleClose} type='button' className="btn btn-dark btn-rounded">Close</button>
                    </div>
                </form>
            </MDBCard>
        </SignUpStyled>
    );
}

export default SignUp;