import React from 'react';
import { MDBInput } from 'mdbreact';

const CheckInput = () => {
    return (
        <div className='custom-checkbox'>
           <MDBInput type='checkbox' className='custom-control-input' id='defaultChecked2'>
               <label className='custom-control-label' for='defaultChecked2'>
                   Hacerta terminos de condiciones y uso
               </label>
           </MDBInput>
        </div>
    )
}

export default CheckInput;