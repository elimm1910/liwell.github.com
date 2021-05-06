import React from 'react';
import {useDispatch} from 'react-redux';

const Services = async() => {
    const dispatch = useDispatch()
    let json = await fetch('data.txt');
    json = await json.json();
    return (
        dispatch({
            type: "CARGAR_JSON",
            json
        })
    )
}

export default Services;