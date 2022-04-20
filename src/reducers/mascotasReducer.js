import { typesRegistroMascota } from "../types/types";


const initialState = {
    listaMascotas: [],
    
}


export const mascotasReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesRegistroMascota.register:
            return {
                listaMascotas: [action.payload]
            }
        case typesRegistroMascota.list:
            return {
                listaMascotas: [...action.payload]
            }
      
        case typesRegistroMascota.delete:
            return {
                listaMascotas: state.listaMascotas.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
