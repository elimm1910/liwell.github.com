import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

//componentes
import ListaProduct from './ListaProduct';
import ImageProduct from './ImageProduct';

const PageProductStyled = styled.div`
position:relative;
overflow:hidden;
`;
const AlingColumn = styled.div`
width:${props => props.width ? props.width : null};
height:100%;
float: ${props => props.left ? "left" : null};
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
`;
const Marg = styled.div`
margin-top:15vh;
margin-right: 0px !important;
height:100%;
`;
const Margen = styled.div`
margin-top:8vh;
`;
const HeightImage = styled.div`
height:65vh;
`;
const HeightLista = styled.div`
height: 18vh;
`;

function PageProduct(props) {
    const lista = useSelector((state) => state.lista)
    const size = useSelector((state) => state.size)
    var idLista = props.match.params.photoId;
    var idSubtema = props.match.params.temaId;
    var idCollection = props.match.params.collectionId;

    return (
        <PageProductStyled>
            {size.width > size.height ?
                <Marg>
                    <AlingColumn left='true' width='22vw'>
                        <ListaProduct
                            collection={lista[idLista].subtema[idSubtema].tiendaVirtual.collections[idCollection]}
                            size={size}
                        />
                    </AlingColumn>
                    <AlingColumn marginLeft="25vw" width='70vw'>
                        <ImageProduct 
                            size={size}
                        />
                    </AlingColumn>
                </Marg>
                :
                <Margen>
                    <HeightImage>
                    <ImageProduct
                        size={size}
                    />
                    </HeightImage>
                    <HeightLista>
                    <ListaProduct
                        collection={lista[idLista].subtema[idSubtema].tiendaVirtual.collections[idCollection]}
                        size={size}
                    />
                    </HeightLista>
                </Margen>
            }
        </PageProductStyled>
    );
}


export default PageProduct;