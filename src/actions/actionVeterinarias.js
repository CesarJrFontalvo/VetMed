
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";
import {  typesRegistroPelicula } from "../types/types";

export const listVeterinariaAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "veterinarias"));
        const empleados = [];
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()
            })
        });
        dispatch(listSync(empleados));
    }
}

export const listSync = (listaVets) => {
    return {
        type: typesRegistroPelicula.list,
        payload: listaVets
    }
}

// -------REGISTRO MASCOTAS---------------------
// export const registerMascotaAsync = (newEmployee) => {

//     return(dispatch) => {

//         addDoc(collection(db,"registroPeliculas"),newEmployee)
//         .then(resp => {
//             // dispatch(registerEmployeeSync(newEmployee))
//             //  dispatch(listEmployeeAsync())
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
//  }

// export const registerMascotaSync = (listaMascota) => {
//     return{
//         type: typesRegistroMascota.register,
//         payload: listaMascota
//     }

// }