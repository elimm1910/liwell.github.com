import React from 'react';
import styled from 'styled-components'
import { MDBRow, MDBCol } from 'mdbreact'
import { motion } from 'framer-motion';

//componentes
import Card from './Card'

const ListHorizontalCardStyled = styled.div`
  text-align: center;
  color:white;
`
const ListCard = styled(motion.span)`
width:80%;
`;
const firstName = {
    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1,
        }
    }
}


function ListHorizontalCard({ lista, id, size }) {
    return (
        <ListHorizontalCardStyled>
                <motion.div className='container'>
                    <MDBRow className='mb-6 r mx-auto'>
                        {lista[id].subtema.map((tema) =>
                            <MDBCol md="4" lg="4" key={tema.id}>
                                <ListCard variants={firstName} >
                                    <Card
                                        idLista={id}
                                        id={tema.id}
                                        title={tema.title}
                                        img={tema.imagen}
                                        texto={tema.texto}
                                        size={size}
                                    />
                                </ListCard>
                            </MDBCol>
                        )}
                    </MDBRow>
                </motion.div>
        </ListHorizontalCardStyled>
    );
}


export default ListHorizontalCard;