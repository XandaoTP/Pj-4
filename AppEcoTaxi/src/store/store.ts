import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import RidersReducer from "./slices/ridersSlice"
import { useDispatch } from "react-redux";



const store = configureStore({
    reducer:{
        userData: userReducer,
        Riders: RidersReducer,
    },
    middleware: getDefaultMiddlewares => {
        const middlewares = getDefaultMiddlewares();
        if (__DEV__) {
          const createDebugger = require('redux-flipper').default;
          middlewares.push(createDebugger());
        }
        return middlewares;
      },
    });
    
    export default store;

export type AllReducerState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;