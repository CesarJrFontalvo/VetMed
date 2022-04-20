import { typesRegistroMascota } from "../types/types";


const initialState = {
    listaUsuario: [],
    search:[]
}


export const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesRegistroMascota.register:
            return {
                listaUsuario: [action.payload]
            }
        case typesRegistroMascota.list:
            return {
                listaUsuario: [...action.payload]
            }
      
        case typesRegistroMascota.delete:
            return {
                listaUsuario: state.listaUsuario.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
