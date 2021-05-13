import { createStore } from 'redux'

var list = [
    {
        "id": 0,
        "url": 'fondo.png',
        "title1": 'Health & Wellness',
        "p1": 'web designer/',
        "p2": 'Show me more',
        "button": 'no',
    }
];

const initialState = {

    lista: list,
    orden: 0,
    clase: '',
    size: {
        'width': window.innerWidth,
        'height': window.innerHeight
    },
    localizacion: '/',
    itemsCart:[],
    producto:[],
    dimensiones:[
    {
        "id":0,
        "x": "",
        "y": "",
        "width":"",
        "heigth":""
    },
    {
        "id":1,
        "x": "",
        "y": "",
        "width":"",
        "heigth":""
    },
    {
        "id":2,
        "x": "",
        "y": "",
        "width":"",
        "heigth":""
    }
],
    top: '0',
    dimension_OnlineCurso: ''

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARGAR_JSON':{
            return { ...state, 
                lista: action.Myjson, 
            }
        }
        case 'SCROLL_ABAJO': {
            return {
                ...state,
                orden: action.orden,
                clase: 'Abajo'
            }
        }
        case 'SCROLL_ARRIBA': {
            return {
                ...state,
                orden: action.orden,
                clase: 'Arriba'
            }
        }
        case 'ELIMINAR_CLASE': {
            return {
                ...state,
                clase: action.ninguna
            }
        }
        case 'CAMBIAR_LOCALIZACION': {
            return {
                ...state,
                localizacion: action.localizacionActual
            }
        }
        case 'CAMBIAR_DIMENSIONES': {
            return {
                ...state,
                dimensiones: [...state.dimensiones.map((dim) => dim.id === action.id ?
                    action.dimensiones:dim)]
        }
        }
        case 'CAMBIAR_DIMENSION_ONLINECURSO': {
            return {
                ...state,
                dimension_OnlineCurso: action.dim
            }
        }
        case 'CAMBIAR_TOP': {
            return {
                ...state,
                top: action.top
            }
        }
        case 'AGREGAR_ITEMSCART': {
            if(action.itemsCart.cantidad === 0){
                action.itemsCart.cantidad = parseInt(action.itemsCart.cantidad)+1;
                return {
                    ...state,
                    itemsCart: state.itemsCart.concat(action.itemsCart)
                }
            }else{
                action.itemsCart.cantidad = parseInt(action.itemsCart.cantidad)+1;
                return {
                    ...state,
                    itemsCart: [...state.itemsCart.map((item) => item.id === action.itemsCart.id ?
                        action.itemsCart:item)]
                }
            }
        }
        case 'DISMINUIR_ITEMSCART': {
            if(action.itemsCart.cantidad === 1){
                return state
            }else{
                action.itemsCart.cantidad = parseInt(action.itemsCart.cantidad)-1;
                return {
                    ...state,
                    itemsCart: [...state.itemsCart.map((item) => item.id === action.itemsCart.id ?
                        action.itemsCart:item)]
                }
            }
        }
        case 'ELIMINAR_ITEMSCART': {
            // if(!action.idItem){
            //     return {
            //         ...state,
            //         itemsCart: []
            //     }
            // }else{
                return {
                    ...state,
                    itemsCart: state.itemsCart.filter(items => items.id !== action.idItem)
                }
            // }
        }
        case 'CAMBIAR_PRODUCTO': {
            return {
                ...state,
                producto: action.producto
            }
        }
        default: {
            return state
        }
    }
}

export default createStore(reducer)