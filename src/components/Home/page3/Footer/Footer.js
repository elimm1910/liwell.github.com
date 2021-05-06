import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import styled from 'styled-components';

//componetes
import LinksGroup from './LinksGroup';

const FooterStyled = styled.div`
background:#c9a392;
a {
  font-weight: 500;
  -webkit-transition: 0.2s color;
  transition: 0.2s color;
}

a:hover, a:focus {
  color: #D10024;
  text-decoration: none;
  outline: none;
}

h5{
    color: #2B2D42;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none
}
li i {
  margin-right: 15px;
  color: white;
  width: 14px;
  text-align: center;
}
`
const Logo = styled.img`
width:auto;
height:40px;
`;

const Footer = ({ handleClick, lista, idLista, idSubtema }) => {

    return (
        <FooterStyled>
            <MDBFooter className="page-footer font-small pt-4 mt-5">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="3">
                            <h5 className="text-uppercase mb-4 font-weight-bold">
                            <Logo src='/livell.png' alt='livell' />
                            </h5>
                            <ul className="footer-links">
                                <li><a href='#'><MDBIcon icon='map-marker-alt'/>1734 Stonecoal Road</a></li>
                                <li><a href='#'><MDBIcon icon='phone'/>+021-95-51-84</a></li>
                                <li><a href='#'><MDBIcon icon='envelope'/>email@email.com</a></li>
                            </ul>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none" />
                        {lista[idLista].subtema[idSubtema].links.map((link) =>
                            <MDBCol md="3" key={link.id}>
                                <LinksGroup
                                    title={link.title}
                                    link1={link.link1}
                                    link2={link.link2}
                                    link3={link.link3}
                                />
                            </MDBCol>
                        )}
                    </MDBRow>
                </MDBContainer>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register to stay updated on our news</h5>
                        </li>
                        <li className="list-inline-item">
                            <button onClick={handleClick} className="btn btn-danger btn-rounded">Sign up!</button>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-fb mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-tw mx-1">
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-gplus mx-1">
                                <i className="fab fa-google-plus"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-li mx-1">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-sm btn-dribbble mx-1">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#!"> LIVELL.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </FooterStyled>
    );
}

export default Footer;





















// import React from 'react';
// import styled from 'styled-components';
// import { MDBRow, MDBCol } from 'mdbreact';
// //componentes


// const FooterStyled = styled.div`
// ${'' /* background:  rgba(216, 46, 46, 0.493);  */}
// ${'' /* background: rgb(101, 204, 147); */}
// .imagen-footer{
//     width:100%;
//     height:100%;
// }
// .texto{
//     color: rgb(61, 60, 60);
// }
// `

// function Footer() {
//     return (
//         <FooterStyled>
//             <div className=''>
//             <div className='container'>
//                     <MDBRow>
//                         <MDBCol md="3" lg="3" className='positionColum p-3'>
//                             <img src='/logo.png' className='imagen-footer' />
//                         </MDBCol>
//                         <MDBCol md="3" lg="3" className='positionColum p-3'>
//                             <h4>Ayuda Informacion</h4>
//                             <h4 className='texto'>Acerca de</h4>
//                             <h4 className='texto'>Centro de ayuda</h4>
//                             <h4 className='texto'>Contactanos</h4>
//                         </MDBCol>
//                         <MDBCol md="3" lg="3" className='positionColum p-3'>
//                             <h4>Links</h4>
//                             <h4 className='texto'>Curso Online</h4>
//                             <h4 className='texto'>Tienda Virtual</h4>
//                             <h4 className='texto'>Blog</h4>
//                         </MDBCol>
//                         <MDBCol md="3" lg="3" className='positionColum p-3'>
//                             <h4>Entretenimientos</h4>
//                             <h4 className='texto'>Propuesta diaria</h4>
//                             <h4 className='texto'>Retos</h4>
//                             <h4 className='texto'>Datos curiosos</h4>
//                         </MDBCol>
//                     </MDBRow>
//                 </div>
//             </div>
//         </FooterStyled>
//     );
// }


// export default Footer;