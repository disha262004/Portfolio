import React from 'react'
function Education({
    imageUrl,
    name , 
    course , 
    period , 
    percentage
    }) {
    return (  
            <div className="row my-4 p-3" style={{backgroundColor:"#e5e7eb", borderRadius:"10px"}}>
                <div className="col-1">
                    <img src={imageUrl} alt="logo" />
                </div>
                <div className="col-11">
                    <h4 className="fw-bold">{name}</h4>
                    <h5>{course}</h5>
                    <p className="text-muted">{period}</p>
                    <p className="fw-bold text-muted">{percentage}</p>
                </div>   
            </div>
    );
}

export default Education;