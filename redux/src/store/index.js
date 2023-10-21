import {createStore} from 'redux'
import {usersReduser} from '../redusers'



export const store = createStore(usersReduser)
