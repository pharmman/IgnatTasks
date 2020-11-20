export type StateType = {
    loading: any
}

const initState:StateType = {
 loading: false
};

export const loadingReducer = (state = initState, action:loadingACType): StateType => { // fix any
    switch (action.type) {
        case "loading":
            return {...state, ...action.payload}
        default: return state;
    }
};

type loadingACType = {
    type: 'loading'
    payload:{
        loading: boolean
    }

}


export const loadingAC = (loading:boolean): loadingACType => ({type: 'loading', payload: {loading}});