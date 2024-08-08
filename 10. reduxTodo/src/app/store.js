// Step one
import { configureStore } from '@reduxjs/toolkit';


// After todoSlice.js Yaha reducer ki knowledge denge jo humne create kiye hain

import todoReducer from "../features/todo/todoSlice";

// Step two
export const store = configureStore({
    reducer: todoReducer
    // Ab hume seekhna hai data send karna or data store se mangana jiske liye methods hain useSelector & useDispatch
});

// Next step hum banayenge reducers in features



