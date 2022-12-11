//verified ok
// authReducer in features-auth-authslice ?

// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./api/apiSlice";

// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//     },
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: true,
// })

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: false,
});

setupListeners(store.dispatch);
