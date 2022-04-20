import { typesRegistroPelicula } from "../types/types";


const initialState = {
    listaVets: [],
    search:[]
}


export const veterinariasReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesRegistroPelicula.register:
            return {
                listaVets: [action.payload]
            }
        case typesRegistroPelicula.list:
            return {
                listaVets: [...action.payload]
            }
      
        case typesRegistroPelicula.delete:
            return {
                listaVets: state.listaVets.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
