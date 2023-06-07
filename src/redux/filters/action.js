import { COLORCHNAGE, STATUSCHNAGE } from "./actionType"

export const colorChnage = (color, changeType) => {
    return {
        type: COLORCHNAGE,
        payload: {
            color,
            changeType
        }
    }
}

export const statusChnage = (status) => {
    return {
        type: STATUSCHNAGE,
        payload: status
    }
}