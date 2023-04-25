import {createReducer} from '@reduxjs/toolkit';

export const userReducer=createReducer({},(b)=>{
    b.addCase("register",(state,action)=>{
        state.user=action.payload

    })
})
export const formReducer=createReducer({},builder=>{
    builder.addCase('form',(state,action)=>{
        state.formData=action.payload
    })
})