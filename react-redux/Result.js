import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {useraction} from "./Slice"



function Result() {

    
  let state = useSelector((state)=>state);
//   console.log(state);


  console.log(state.data);
let dispatch = useDispatch();

// console.log(state);

let fuc = ()=>{
console.log('wrk');
    dispatch(useraction([...state.data,'kumar']))

}




  return (
    <div>
        <button onClick={()=>fuc()}>click</button>
        
        {state.data.map((ele)=>

        
       
        <div>{ele}</div>
        )}
         

      
    </div>
  )
  
}

export default Result