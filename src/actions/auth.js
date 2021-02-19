import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { types } from '../types/types'

export const startLogin = ( email, password  ) => {
    
    return async( dispatch )=> {

        const resp = await fetchWithoutToken( 'auth',{ email, password }, 'POST' );
        const body = await resp.json();

         if( body.ok ) {

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login( { 
                uid: body.uid,
                name: body.name
            } ) )
         }else{
             Swal.fire( 'Error', body.msg, 'error' )
         }
        
    }
}

export const startRegister = ( name, email, password ) => {

    return async ( dispatch ) => {

            const resp = await fetchWithoutToken( 'auth/new', { name, email, password }, 'POST' );
            const body = await resp.json();

            if ( body.ok ) {

                localStorage.setItem( 'token', body.token );
                localStorage.setItem( 'token-init-time', new Date().getTime() );

                dispatch( register( {
                    name: body.name,
                    uid: body.uid
                } ) )

                Swal.fire({
                    position: 'top-end',
                    icon:"success",
                    title:"Registro exitoso",
                    showConfirmButton: false,
                    timer: 1500
                })

            }else{
                Swal.fire( { 
                    icon: 'error',
                    title: 'Algo anda mal',
                    text: body.msg
                 } )
            }
    } 
}


export const startChecking = () => {
    return async( dispatch ) => {

       
        const resp = await fetchWithToken( 'auth/renew' );
        const body = await resp.json()

        console.log(body)
       
        if( body.ok ) {

            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime());

            dispatch( login( {
                uid: body.uid,
                name: body.name
            } ) )
            
        }else{

            // Swal.fire({
            //         icon: 'error',
            //         title: 'Error',
            //         text: body.msg,
            //         showClass: {
            //           popup: 'animate__animated animate__fadeInDown'
            //         },
            //         hideClass: {
            //           popup: 'animate__animated animate__fadeOutUp'
            //         }
                  
            // })

            dispatch( checkingFinish() )

        }



    }
}


const login = ( user ) =>{
    return {
        type: types.authStartLogin,
        payload: user
    }
}

const register = ( newUser ) => {

    return{
        type: types.authStartLogin,
        payload: newUser
    }

}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})