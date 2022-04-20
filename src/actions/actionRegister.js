import {types} from '../types/types';
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";


            //  registro Asincrono 
export const registroEmailPasswordNombre = (registroname, registroemail, registropass) => {
    return(dispatch) => {// el dispatch es para guardar en el store
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, registroemail, registropass)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName:registroname })
            //La linea deabajo es para adicional si quieres llevar la información a Redux 
           dispatch(registerSincrono(user.registroemail,user.uid,user.displayName))
            // console.log(user);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const registerSincrono = (registroname, registroemail, registropass) => {

    return{
       type: types.register,
       payload: {
        registroname,
         registroemail, 
         registropass
       }
    }
}

