import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "./userSlice";
import hiwReducer from "./hiwSlice"
import SurveyReducer from "./surveySlice"
import AnswersReducer from "./answerSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        hiwites: hiwReducer,
        surveyitems: SurveyReducer,
        answeritems: AnswersReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch