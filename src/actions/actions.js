import uuid from 'uuid';
import { createRandomRegistrationNumber, chooseRandomColor } from '../randomGenerators'
import moment from 'moment'
import { ADD_CAR, REMOVE_CAR, CREATE_LOT_PREFILLED, CREATE_LOT, SET_ROUTE_INDEX } from '../constants'

export const addCar = (car) => {
    car.time = moment()
    car.bookingId = uuid()
    return {
        type: ADD_CAR,
        payload: car
    }
}

export const removeCar = (bookingId) => {
    return {
        type: REMOVE_CAR,
        payload: {
            bookingId
        }
    }
}

export const createLot = (number) => {
    return {
        type: CREATE_LOT,
        payload: {
            number
        }
    }

}

export const createLotPrefilled = (totalSlots, occupiedSlots) => {
    let lotDetails = []
    lotDetails.length = totalSlots
    lotDetails = lotDetails.map(e => null)
    console.log(totalSlots, occupiedSlots)
    for (let i = 0; i < occupiedSlots; i++) {
        let car = {};
        car.registration = createRandomRegistrationNumber();
        car.color = chooseRandomColor();
        car.time = moment()
        car.bookingId = uuid();
        lotDetails[i] = car;
    }
    console.log(lotDetails)
    return {
        type: CREATE_LOT_PREFILLED,
        payload: {
            lotDetails
        }
    }
}

export const setRouteIndex = (routeIndex) => {
    return {
        type: SET_ROUTE_INDEX,
        payload: {
            routeIndex
        }
    }

}
