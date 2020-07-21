/*Write a React app that shows a selector for the different modes of transport available from TfL (for example bus, tube, rail).

The app should fetch data from https://api.tfl.gov.uk/Line/Meta/Modes when the page loads. The documentation for this API is available here

Using this data, the app should show a <select> with all of the modeNames returned from the API

When an option in the <select> is selected, it should show that modeName on screen

Your project should be on GitHub and Netlify with correct names (see GitHub & Hosting section above) */


import React, {useState, useEffect} from "react";
import DisplayTransportModes from "./DisplayTransportModes"

const Data = () =>{

const [modeName, setModeName] = useState([]);

useEffect(() => {
fetch("https://api.tfl.gov.uk/Line/Meta/Modes")

.then(response => response.json())
.then((data) => {
    console.log(data);
    setModeName(data)

})

}, [])
return <div> <DisplayTransportModes transportData = {modeName}/> </div>
}

export default Data;