export type ThemeType = 'some'| 'red'| 'dark' | 'yellow' | 'pink'

type InitStateType = {
    theme: 'some'| 'red'| 'dark' | 'yellow' | 'pink'
}

const initState:InitStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                ...action.payload
            };
        }
        default: return state;
    }
};

type ActionsType = ChangeThemeCType

type ChangeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme:ThemeType) => {
    return {
        type: 'CHANGE_THEME',
        payload: {
            theme
        }
    } as const
};