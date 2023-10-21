import { resusersTypes } from './redusersTypes'


const initialState = {
    data: []
}

export const usersReduser = (state = initialState, action) => {
    // const findDup = state.data.filter((item, index) => item.email === action.payload.email)
    // if (!findDup) {
        switch (action.type) {
            case resusersTypes.SET_REGISTER_DATA: {
                console.log(state, action.payload);
                return { ...state, data: [...state.data, action.payload] }
            }
            default: {
                return state
            }
        }
    // }

    return state

}