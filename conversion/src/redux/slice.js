import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('saves')) || [];

export const slice = createSlice({
	name: 'saves',
	initialState: initialState,
	reducers: {
		addSave: (state, action) => {
			const save = {
				id: action.payload.id,
				numFrom: action.payload.numFrom,
				unitFrom: action.payload.unitFrom,
				numTo: action.payload.numTo,
				unitTo: action.payload.unitTo
			};
			state.push(save);
		},
		deleteSave: (state, action) => {
			return state.filter(save => save.id !== action.payload.id);
		}
	},
});


export const { addSave, deleteSave } = slice.actions;

export default slice.reducer;