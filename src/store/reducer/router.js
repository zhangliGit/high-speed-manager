import { ROUTER_TYPE } from '../action/router'

const initState = {
    status: true
}

export const routerType = (state = initState, action) => {
    switch(action.type) {
        case ROUTER_TYPE: 
        return {
            ...state,
            status: action.status
        }
    }
}