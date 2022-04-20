
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs,addDoc} from "@firebase/firestore";
import { typesRegistroMascota } from "../types/types";
import { Link } from "react-router-dom";

// Listar mascotas------------------------------
export const listaMascotaAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "mascotas"));
        const empleados = [];
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()
            })
        });
        dispatch(listMascotaSync(empleados));
    }
}

export const listMascotaSync = (listaMascotas) => {
    return {
        type: typesRegistroMascota.list,
        payload: listaMascotas
    }
}
// -----------------------------------------------



// Registrar mascotas--------------------------------------
export const registerMascotaAsync = (newMascota) => {

    return(dispatch) => {

        addDoc(collection(db,"mascotas"),newMascota)
        .then(resp => {
            dispatch(registerMascotaSync(newMascota))
            alert('mascota agregada');
            
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerMascotaSync = (listaMascotas) => {
    return{
        type: typesRegistroMascota.register,
        payload: listaMascotas
    }

}
// -------------------------------------------------



// Listar usuarios -------------------------
export const listaUsuarioAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "usuario"));
        const empleados = [];
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()
            })
        });
        dispatch(listUsuarioSync(empleados));
    }
}

export const listUsuarioSync = (listaUsuario) => {
    return {
        type: typesRegistroMascota.list,
        payload: listaUsuario
    }
}
// -----------------------------------------
