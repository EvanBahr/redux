import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer, blacklist, initialState } from "./reducer";

// ini configurasi localStorage
// const persistConfig = {
//   key: "root",
//   blacklist,
//   storage,
// };

// // ini membuat localStorage
// // param pertama adl config
// // parm kedua adl data (state dan setState global)
// const persistedReducer = persistReducer(persistConfig, RootReducer);

// ini utk membuat toko (store)
// jadi store diisi dengan localStorage

export const store = createStore(RootReducer, initialState );
// export const persistor = persistStore(store);
