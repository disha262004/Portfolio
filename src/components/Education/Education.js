import React from 'react'
function Education({
    imageUrl,
    name , 
    course , 
    period , 
    percentage
    }) {
    return (  
            <div className="row my-4 py-3" style={{backgroundColor:"#e5e7eb", borderRadius:"10px"}}>
                <div className="col-1 my-1 p-3">
                    <img src={imageUrl} alt="logo" style={{borderRadius:"100%", width:"100%"}}/>
                </div>
                <div className="col-11">
                    <h4 className="fw-bold" style={{color:"#73C7C7"}}>{name}</h4>
                    <h5>{course}</h5>
                    <p className="text-muted">{period}<br />
                    {percentage}</p>
                </div>   
            </div>
    );
}

export default Education;