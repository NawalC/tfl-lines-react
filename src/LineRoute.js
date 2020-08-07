import React, {useEffect, useState} from 'react'

function LineRoute(props) {
    const [lineRoute, setLineRoute] = useState()

    useEffect(()=>{
        fetch(`https://api.tfl.gov.uk/Line/${props.route}/Route`)
        .then(response => response.json())
        .then(data => {
            setLineRoute(data.routeSections);
            console.log(data.routeSections);
        })
    },[props.route])
    
    if (!lineRoute) {
        return null;
      } else{
        

    return (
        <div className = "d-md-flex row mx-md-6">
        <div className=" d-sm-flex  card rounded-lg col px-md-6 p-1 w-50   d-inline-block  h-100 p-3  border bg-success  h-50 text-white">
            <h4>Start of Line</h4>
         <h3 className = "text-center text-wrap">{lineRoute[0].originationName}</h3></div>
         <div>
         <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
</svg>
         </div>
        
        <div className =" d-sm-flex card rounded-lg col px-md-2 p-1  w-50 d-inline-block h-100p-3 border bg-success text-white">
            <h4>End of Line</h4>
            <h3 className = "text-center text-wrap">{lineRoute[0].destinationName}</h3> </div>
   </div> )}
}

export default LineRoute;