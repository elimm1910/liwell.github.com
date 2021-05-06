import React from 'react';
import styled from 'styled-components';

//componentes
import CardImagen from './CardImagen';
import FooterImagen from './FooterImagen';

const Responsive = styled.div`
margin-top:15vh;
height:70vh;
`
function ImageProduct({ size }) {

    return (
        <div>
            {size.width > size.height ?
                <div>
                    <div className='mt-3 mb-4'>
                        <CardImagen
                            size={size}
                        />
                    </div>
                    <FooterImagen/>
                </div>
                :
                <Responsive>
                    <div className='m-3'>
                        <CardImagen
                            size={size}
                        />
                    </div>
                </Responsive>
            }
        </div>
    );
}


export default ImageProduct;