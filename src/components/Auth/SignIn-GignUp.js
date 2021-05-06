import React from 'react';
import styled from 'styled-components';
//componentes
import SignIn from './SignIn';
import SignUp from './SignUp';


const SignInAndSignUpStyled = styled.div`
.sign-in-and-sign-up{
    margin-top: 15%;
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
}
`


function SignInAndSignUp() {
    return (
        <SignInAndSignUpStyled>
            <div className='container sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
            </div>
        </SignInAndSignUpStyled>
    );
}

export default SignInAndSignUp;