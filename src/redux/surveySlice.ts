import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type SurveyItem = {
    id: string;
    title: string;
    content: string;
    imgUrl: string;
}

type SurveyItemState = {
    surveyitems: SurveyItem[];
    loading: boolean;
    error: string | undefined;
}

const initialState: SurveyItemState = {
    surveyitems: [],
    loading: false,
    error: undefined,
}

export const getSurveyItems = createAsyncThunk<SurveyItem[], undefined, {rejectValue: string}>(
    'surveyitems/getSurveyItems',
    async function(_, {rejectWithValue}) {
        try {
            const responce = await fetch(`https://a912654b4478639c.mokky.dev/survey`, {
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

const SurveySlice = createSlice({
    name: 'surveyitems', 
    initialState, 
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getSurveyItems.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder
        .addCase(getSurveyItems.fulfilled, (state, action) => {
            state.surveyitems = action.payload;
            state.loading = false;
        });
        builder.addCase(getSurveyItems.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
})

export default SurveySlice.reducer