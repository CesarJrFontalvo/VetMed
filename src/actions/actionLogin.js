import {types} from '../types/types';
import {  getAuth, signInWithPopup,signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { google } from '../firebase/firebaseConfig';

export const logout = () => {
    return( dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSincrono())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
   return{
       type: types.logout,
       payload: {}
   }
}

export const loginEmailPassword = (logemail,logpass) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,logemail,logpass)
       .then(({user}) =>{
           
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log('Bienvenid@');
       })
       .catch(e =>{
           console.log(e);
            console.log('El usuario no existe');
       })
    }
}

export const loginGoogle = () => {//Login Asincrono

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {

    return{
       type: types.login,
       payload: {
           id,
           displayname
       }
    }
}

