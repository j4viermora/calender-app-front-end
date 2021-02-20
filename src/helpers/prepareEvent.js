import moment from 'moment'

const prepareEvent = ( events = [] ) => {

    return events.map(
        (evento) => ({
            ...evento,
            end: moment( evento.end ).toDate(),
            start: moment( evento.start ).toDate()
        })
    )


}


export default prepareEvent