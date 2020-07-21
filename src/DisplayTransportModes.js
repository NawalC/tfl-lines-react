import React, {useState} from "react";
import Data from "./Data";

const DisplayTransportModes = (props) => {
    const [selected, setSelected] = useState("bus")
return(
   <div>
      <select onChange = {e => setSelected(e.currentTarget.value)}>
          {props.transportData.map((mode,index) =>  {
        return(
        <option value = {mode.modeName} key= {index}> { mode.modeName} </option>
          )})}

        
          </select> 

        <p>You selected mode: {selected} </p>
   </div>
)
}


export default DisplayTransportModes