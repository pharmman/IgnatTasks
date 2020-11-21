import {PersonType} from '../HW8';

export const homeWorkReducer = (state: PersonType[], action: ActionsType): PersonType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload.side === 'up') {
                state.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload.side === 'down')
                state.sort((a, b) => a.name < b.name ? 1 : -1)
            return [...state]
        }
        case 'check': {
            return [...state.filter((e) => e.age > action.payload.age)]
        }
        default:
            return state
    }
};

export const sortByNameAC = (side: string): SortByNameType => {
    return {
        type: 'sort',
        payload: {
            side
        }
    }
}

export const checkAgeAC = (age: number): SortByAgeType => {
    return {
        type: 'check',
        payload: {
            age
        }
    }
}

type SortByNameType = {
    type: 'sort'
    payload: {
        side: string
    }

}

type SortByAgeType = {
    type: 'check'
    payload: {
        age: number
    }
}

type ActionsType = SortByNameType | SortByAgeType