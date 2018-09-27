import C from './constants'
import { v4 } from 'uuid'

export const addColor = (color = "#000000", title = "") => {
    return {
        type: C.ADD_COLOR,
        color,
        title,
        rating: 0,
        id: v4(),
        timestamp: new Date().toString()
    }
}

export const rateColor = (id = "", rating = 0) => {
    return {
        type: C.RATE_COLOR,
        rating,
        id,
    }
}

export function removeColor(id = "") {
    return {
        type: C.REMOVE_COLOR,
        id,
    }
}