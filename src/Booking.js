import React from "react";
function BookingImg(props){

    return(
        <>
        
       <img style={{height:"200px",width:"200px" ,borderRadius:"10px"}} src={props.src} alt="ima" />
        {/* <p className="booking">{props.name}</p>
        <p className="container1"></p> */}
        </>
    )
}
export default BookingImg;