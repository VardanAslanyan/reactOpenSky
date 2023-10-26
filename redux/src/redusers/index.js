import { resusersTypes } from './redusersTypes'


const initialState = {
    data: []
}

export const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case resusersTypes.SET_REGISTER_DATA: {
            const findDup = state.data.filter((item, index) => item.email === action.payload.email)
            if (!findDup.length) {
                return { ...state, data: [...state.data, action.payload] }
            } else{
                return state
            }
        }
        default: {
            return state
        }
    }
}