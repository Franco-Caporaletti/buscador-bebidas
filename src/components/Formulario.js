import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {


    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);


    //funcion para leer los contenidos
    const obtenerDatos = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    return ( 
        <form 
            className="col-12" 
            onSubmit={e =>{
            e.preventDefault();
            buscarRecetas(busqueda);
            guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">

                <div className="col-md-4">
                    <input 
                    type="text"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por ingrediente"
                    onChange={obtenerDatos} 
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        className="form-control"
                        onChange={obtenerDatos}
                    >
                        <option value="">-- Selecciona Categoría --</option>

                        {/* iterar en categorias para mostrarlas en el value */}
                        {categorias.map(categoria =>(
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>    
                        ))}

                    </select>
                </div>

                <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-primary" value="Buscar bebidas" />
                </div>
                
            </div>
        </form>
    );
}

export default Formulario;