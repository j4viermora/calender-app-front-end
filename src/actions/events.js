import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import prepareEvent from "../helpers/prepareEvent";
import { types } from "../types/types";

export const eventStartAddNew = ( event ) => {


    return async( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try{

            const resp = await fetchWithToken( 'events', event, 'POST' )
            const body = await resp.json()
            
            if ( body.ok ){

                event.id = body.evento.id;
                event.user = {
                    _id : uid ,
                    name: name ,
                }

                console.log( event )
                dispatch( eventAddNew( event ) )
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Tarea guardada',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }catch( err ){
            Swal.fire({
                icon: 'error',
                title: 'Algo ha fallado',
                text: err
            })
        }
        


    }
}

const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ 
    type: types.eventClearActiveEvent 
});

export const eventStartUpdated = ( event ) => {
   
    return async( dispatch ) => {

        try {

            

            const resp = await fetchWithToken( `events/${ event.id }`, event , 'PUT' )
            const body = await resp.json()

            console.log( body )

            if( body.ok ){
                dispatch( eventUpdated( body.evento ) )
                Swal.fire({
                    icon : 'succes',
                    position: 'top-end',
                    title: 'Tu nota a sido guardad'
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Algo anda mal',
                    text: body.msg
                })
            }

        }catch( err ) {
           console.log(err)
        }



    }
}

const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});



export const eventStartDelete = ( event ) => {
    return  async( dispatch, getState ) => {
            
        const { id } = getState().calendar.activeEvent;


        try{
            const resp = await fetchWithToken( `events/${ id }`, event, 'DELETE' );
            const body =  await resp.json()

            if( body.ok ) {
                
                

                dispatch( eventDeleted( event ) )

                Swal.fire({
                    icon : 'success',
                    title: 'Tarea borrada con exito'
                })


            }else{
                Swal.fire({
                    icon: 'error',
                    text: body.msg
                })
            }

        }catch( err ){
            console.log(err)
        }
        

    


    }
}


const eventDeleted = () => ({
     type: types.eventDeleted
    });




export const eventStartLoading = () => {

    return async ( dispatch ) => {

        try{

            const resp = await fetchWithToken( 'events' )
            const body = await resp.json()

           const events = prepareEvent( body.eventos );

            dispatch( eventLoaded( events ) )


        }catch( err ){

            console.log(err)

        }


    }
}


const eventLoaded = ( event ) => ({

    type: types.eventLoaded,
    payload: event

})

export const clearEventLogout = () => ({
    type: types.eventClearLogout
})