import React from 'react';
import styled from 'styled-components';
import { MDBIcon } from 'mdbreact';
import { motion, AnimatePresence } from 'framer-motion';

const InformacionStyled = styled.div`
h1 {
  color: rgb(216, 46, 46);
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  margin-top: 110px;
  text-align: center;
  font-size: 6vh;
}
h1 span {
  color: #4E203C;
  display: block;
  font-size: .45em;
  letter-spacing: 3px;
}
`;
const WrapperDetail = styled(motion.div)`
width: 50vw;
position: fixed;
bottom:10%;
left:25vw;
@media only screen and (max-width: 624px) {
  width: 90vw;
  bottom:10%;
  left:5vw;
}
@media only screen and (max-width: 500px) {
width: 90vw;
bottom:8%;
left:5vw;
h1 {
  font-size: 5vh;
}
}
`;
const Front = styled.div`
width: 100%;
height: 100%;
`;
const UL = styled.ul`
margin-top: 10%;
width: 100%;
list-style: none;
padding: 0 1%;
`;
const Li = styled.li`
width: 31.3333333333%;
margin: 0 1%;
float: left;
padding: 10px;
border: 2px solid rgb(216, 46, 46);
border-radius: 4px;
position: relative;
text-align: center;
color: #4E203C;
i{
  position: absolute;
  top: -25px;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height:30px;
  background: rgb(216, 46, 46);
  color: white;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
}
`;

const transition2 = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

function Informacion({ curso }) {
  return (
    <InformacionStyled>
      <AnimatePresence initial={false}>
        <WrapperDetail
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={transition2}
          className="container"
          key={curso.id}>
          <Front>
            <h1>{curso.name}<span>{curso.descroption}</span></h1>
            <UL>
              <Li><MDBIcon icon='user-graduate' />{curso.nameProfesor}</Li>
              <Li><MDBIcon icon='euro-sign' />{curso.price}</Li>
              <Li><MDBIcon icon='pager' />my-site.com</Li>
            </UL>
          </Front>
        </WrapperDetail>
      </AnimatePresence>
    </InformacionStyled>
  );
}


export default Informacion;