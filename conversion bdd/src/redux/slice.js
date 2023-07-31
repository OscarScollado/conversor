import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('saves')) || [];

export const getSavesAsync = createAsyncThunk(
	'saves/getSavesAsync',
	async () => {
		const resp = await fetch('http://localhost:7000/saves');
		if (resp.ok) {
			const saves = await resp.json();
			return { saves };
		}
	}
);

export const addSaveAsync = createAsyncThunk(
	'saves/addSaveAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/saves', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				numFrom: payload.numFrom,
				unitFrom: payload.unitFrom,
				numTo: payload.numTo,
				unitTo: payload.unitTo
			}),
		});

		if (resp.ok) {
			const save = await resp.json();
			return { save };
		}
	}
);

export const deleteSavesAsync = createAsyncThunk(
	'saves/deleteSavesAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/saves/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

export const slice = createSlice({
	name: 'saves',
	initialState: initialState,
	extraReducers: (builder) => {
		builder
		  .addCase(getSavesAsync.fulfilled, (state, action) => {
			return action.payload.saves;
		  })
		  .addCase(addSaveAsync.fulfilled, (state, action) => {
			state.push(action.payload.save);
		  }).addCase(deleteSavesAsync.fulfilled, (state, action) => {
			return state.filter(save => save.id !== action.payload.id);
		  });
	}
});


export const { addSave, deleteSave } = slice.actions;

export default slice.reducer;