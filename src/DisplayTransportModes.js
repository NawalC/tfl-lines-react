import React, {useState} from "react";
import SelectLines from './SelectLines'




const DisplayTransportModes = (props) => {
    const [selected, setSelected] = useState(null)
    
return(
   <div className="mb-4">
      <select className = "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange = {e => setSelected(e.currentTarget.value)}>
      <option>Choose a Mode of Transport...</option>
          {props.transportData.map((mode,index) =>  {
        return(
        <option value = {mode.modeName} key= {index}> { mode.modeName} </option>
          )})}

        
          </select> 

        <p>You selected mode: {selected} </p>
  {selected ?   <SelectLines data = {selected}  />: null }
   
   </div>
)
}


export default DisplayTransportModes