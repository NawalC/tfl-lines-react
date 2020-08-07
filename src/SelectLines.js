import React, {useEffect, useState} from 'react';
import LineRoute from "./LineRoute";

const SelectLines = ({data})=> {

    const [lines, setLines] = useState([])
    const [selectedLine, setSelectedLine] = useState('')
    console.log(lines);

    

    useEffect(()=>{

        if (!data) return;
        
        fetch(`https://api.tfl.gov.uk/Line/Mode/${data}`)
        .then(response => response.json())
        .then((data)=> setLines(data))
    }, [data])

    return( lines.length ?      <div className="mb-4">
        <select onChange = {e => setSelectedLine(e.currentTarget.value)} className = "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       >
        <option>Choose a Line...</option>
         {lines.map((line, index) =>{
             
             return(
             <option value = {line.id }key ={index}>
             {line.id} 
             </option>
       )  })}   
        </select>
<h3>You selected <b>{selectedLine}</b></h3> 
<LineRoute route = {selectedLine}/> 
     </div> : <p>No information avaiable</p> 
   
    )
   
}

export default SelectLines