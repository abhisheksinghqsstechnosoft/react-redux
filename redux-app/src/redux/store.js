
import { configureStore } from '@reduxjs/toolkit'
import { userReducer,formReducer } from './reducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        formData: formReducer
    }
})

export default store;