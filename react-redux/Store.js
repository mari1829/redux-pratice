import { configureStore } from "@reduxjs/toolkit";
import slicev from "./Slice"


export const store = configureStore({
    reducer:{
        data : slicev
    }
       
    
}

)
console.log(store.data);
