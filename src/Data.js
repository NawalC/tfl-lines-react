

import React, {useState, useEffect} from "react";
import DisplayTransportModes from "./DisplayTransportModes"

const Data = () =>{

const [modeName, setModeName] = useState([]);


useEffect(() => {
fetch("https://api.tfl.gov.uk/Line/Meta/Modes")

.then(response => response.json())
.then((data) => {
    setModeName(data)

})

}, [])

return <div> <DisplayTransportModes transportData = {modeName}/> </div>
}

export default Data;