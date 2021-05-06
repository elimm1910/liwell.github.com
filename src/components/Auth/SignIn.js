import React, { useState } from 'react';
import styled from 'styled-components';

import { auth, signInWithGoogle } from './Firebase/firebaseUtil';

//components
import FormInput from './FormInput';
import CustomButton from './CustomButton';

const SignInStyled = styled.div`
.sign-in{
    margin-top: 15%;
    width: 350px;
    display:flex;
    flex-direction:column;
}
.buttons{
    display:flex;
    justify-content: space-between;
}
`


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        {
            name === 'email' ?
                setEmail(value)
                :
                setPassword(value)
        }
    }

    return (
        <SignInStyled>
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
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

                    <div className='bottons'>
                    <CustomButton type='submit'>Submit Form</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Submit Google</CustomButton>
                    </div>
                </form>
            </div>
        </SignInStyled>
    );
}

export default SignIn;