import{ combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer} from 'redux-persist';   
import storage from 'redux-persist/lib/storage';    
import persistStore from 'redux-persist/es/persistStore';
 const rootReducer=combineReducers({user:userReducer});
 const persistConfig={
    key:'root',
    storage,
    version:1,

 }
 const persistedReducer=persistReducer(persistConfig,rootReducer);
export const store=configureStore({
    // reducer:{
    //     //this is same as userSlice but the name of the slice is the key of the reducer
    //     user:userReducer
    // },
    reducer:persistedReducer,
    // serializableCheck: This option is part of the configuration for the default middleware. By default, Redux Toolkit includes a middleware that checks whether the actions and state are serializable. This is important because Redux relies on serializable data to ensure that the state can be easily saved, restored, and debugged. If you set serializableCheck to false, you are opting out of this check.
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    }
    )
});
export const persistor=persistStore(store);