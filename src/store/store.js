import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { mascotasReducer } from '../reducers/mascotasReducer';
import { veterinariasReducer } from '../reducers/veterinariasReducer';
import { usuarioReducer } from '../reducers/usuarioReducer';


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    veterinaria:veterinariasReducer,
    mascota:mascotasReducer,
    usuario:usuarioReducer
  
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)