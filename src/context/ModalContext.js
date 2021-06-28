import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) =>{

    const [idreceta, guardarIdreceta] = useState(null)
    const [ informacion, guardarReceta] = useState({});
    
    //una vez obtenida la receta llamar a la api
    useEffect( () => {
        const obtenerReceta = async () => {
            // si no hay receta no hace nada 
            if(!idreceta) return;
            // continua
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await axios.get(url);
            console.log(resultado)
            guardarReceta(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta]);


    return (
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdreceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;