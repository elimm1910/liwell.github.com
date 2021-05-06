import React from 'react';
import styled from 'styled-components';
import { MDBIcon } from 'mdbreact';

const ItemFooterStyled = styled.div`
.height{
    height: 13vh;
}
p{
    margin:0px !important;
}
.icon-size{
    font-size:4vw;
}
`;
const AlingColumnItemFooter = styled.div`
width:${props => props.width ? props.width : null};
height:100%;
float: ${props => props.left ? "left" : null};
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;


function ItemFooter({ icon, texto }) {

    return (
        <ItemFooterStyled>
            <div className='height'>
                <AlingColumnItemFooter left='true' width='6vw'>
                    <MDBIcon icon={icon} className='ml-3 icon-size' />
                </AlingColumnItemFooter>
                <AlingColumnItemFooter marginLeft='8vw' width='26vw'>
                    <div>
                        <p> {texto}</p>
                    </div>
                </AlingColumnItemFooter>
            </div>
        </ItemFooterStyled>
    );
}


export default ItemFooter;

