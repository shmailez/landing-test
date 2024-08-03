import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type HiwItem = {
    id: string;
    title: string;
    content: string;
    imgUrl: string;
}

type HiwItemState = {
    hiwitems: HiwItem[];
    loading: boolean;
    error: string | undefined;
}

const initialState: HiwItemState = {
    hiwitems: [],
    loading: false,
    error: undefined,
}

export const getHiwItems = createAsyncThunk<HiwItem[], undefined, {rejectValue: string}>(
    'hiwitems/getHiwItems',
    async function(_, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://a912654b4478639c.mokky.dev/hiw`, {
                method: 'GET'
            })

            if(!responce.ok) {
                return rejectWithValue('Server Error!');
            }

            const data = await responce.json()

            return data
        } catch (error: unknown) {
            return console.log(error)
        }
    }
)

const HiwSlice = createSlice({
    name: 'hiwitems', 
    initialState, 
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getHiwItems.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder
        .addCase(getHiwItems.fulfilled, (state, action) => {
            state.hiwitems = action.payload;
            state.loading = false;
        });
        builder.addCase(getHiwItems.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
})

export default HiwSlice.reducer