import { ADD_CAR, REMOVE_CAR, CREATE_LOT, CREATE_LOT_PREFILLED, SET_ROUTE_INDEX } from '../constants'
const defaultState = {
    lotDetails: [],
    errorMessage: '',
    routeIndex: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CAR:
            {
                let lotDetails = state.lotDetails.map(e => e)
                let vacantIndex = null;
                let errorMessage = ''
                for (let i = 0; i < lotDetails.length; i++) {
                    if (!lotDetails[i]) {
                        vacantIndex = i
                        break
                    }
                }
                if (vacantIndex < lotDetails.length) {
                    lotDetails[vacantIndex] = { ...action.payload }
                }
                else {
                    errorMessage = 'Sorry, no slots available'
                }
                return {
                    ...state,
                    lotDetails,
                    errorMessage
                }
            }

        case REMOVE_CAR: {
            let lotDetails = state.lotDetails.map(e => e)
            let bookingId = action.payload.bookingId
            lotDetails = lotDetails.map((slot) => {
                return slot && slot.bookingId && slot.bookingId == bookingId ? null : slot
            })
            return {
                ...state,
                lotDetails
            }
        }

        case CREATE_LOT: {
            let lotDetails = []
            lotDetails[action.payload.number - 1] = null
            lotDetails.map(e => null)
            return {
                ...state,
                lotDetails
            }
        }

        case CREATE_LOT_PREFILLED: {
            let lotDetails = action.payload.lotDetails
            console.log('Reducer', lotDetails)
            return {
                ...state,
                lotDetails
            }
        }

        case SET_ROUTE_INDEX: {
            let routeIndex = action.payload.routeIndex
            return {
                ...state,
                routeIndex
            }
        }
        default:
            return state;
    }
};