import {PersonType} from '../HW8';

function sortByNameUp(a: any, b: any) {
    switch (a.name > b.name) {
        case  true:
            return 1
        case false:
            return -1
        default:
            return 0
    }
}

function sortByNameDown(a: any, b: any) {
    switch (b.name > a.name) {
        case  true:
            return 1
        case false:
            return -1
        default:
            return 0
    }
}

export const homeWorkReducer = (state: PersonType[], action: ActionsType): PersonType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload.side === 'up') {
                state.sort(sortByNameUp)
            }
            if (action.payload.side === 'down')
                state.sort(sortByNameDown)
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