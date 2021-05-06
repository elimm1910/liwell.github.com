import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function ScrollToTop(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const localizacionActual = pathname
            window.scrollTo(0, 0);
        dispatch({
            type: "CAMBIAR_LOCALIZACION",
            localizacionActual
        });
    }, [pathname])

    return props.children;
}