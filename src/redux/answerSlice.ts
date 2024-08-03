import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type AnswerItem = {
    id: string;
    title: string;
    content: string;
    imgUrl: string;
}

type AnswerItemState = {
    answeritems: AnswerItem[];
    loading: boolean;
    error: string | undefined;
}

const initialState: AnswerItemState = {
    answeritems: [],
    loading: false,
    error: undefined,
}

export const getAnswerItems = createAsyncThunk<AnswerItem[], undefined, {rejectValue: string}>(
    'answeritems/getAnswerItems',
    async function(_, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://a912654b4478639c.mokky.dev/answers`, {
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

const AnswerSlice = createSlice({
    name: 'answeritems', 
    initialState, 
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAnswerItems.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder
        .addCase(getAnswerItems.fulfilled, (state, action) => {
            state.answeritems = action.payload;
            state.loading = false;
        });
        builder.addCase(getAnswerItems.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
})

export default AnswerSlice.reducer