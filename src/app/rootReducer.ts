import { combineReducers } from "@reduxjs/toolkit";
import fakeStoreItems from "../utils/shopSlice";

const rootReducer = combineReducers({
	fakeStoreItems
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
