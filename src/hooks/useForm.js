import { useState } from "react";



const useForm = ( initialState = {} ) => {

    const [ value , setValue ] = useState( initialState )

    const handleInputChange = ( e ) => {

        const target = e.target

        setValue( {
            ...value,
            [ target.name ]: target.value
        } )

        
    } 
    
    return [ value, handleInputChange ]

}


export default useForm