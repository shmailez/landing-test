import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

type User = {
    id: string
    name: string
    phoneNumber: string
    consent: boolean
}

const userAdapter = createEntityAdapter<User>({})

const UsersSlice = createSlice({
    name: 'users', 
    initialState: userAdapter.getInitialState(), 
    reducers: {
        addUser: userAdapter.addOne,
    }
})

export const userSelector = userAdapter.getSelectors<RootState>((state) => state.users)

export const {addUser} = UsersSlice.actions

export default UsersSlice.reducer