import {createSlice} from '@reduxjs/toolkit';

type ThemeState = {
    theme: 'light' | 'dark';
};
const getInitialTheme = (): 'light' | 'dark' => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' ? 'dark' : 'light';
};
const initialState: ThemeState = {
    theme: getInitialTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        },
    },
});

export const {toggleTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;