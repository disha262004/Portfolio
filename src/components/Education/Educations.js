import React from 'react'
import Education from './Education'

function Educations() {
    return ( 
        <div className="container mt-5 py-5">
        <h2 className="fw-bold text-center my-5">Education</h2>
            <Education 
                // imageUrl=""
                name="Jagannath University, Jaipur" 
                course="Bachelor of Technology in Computer Science" 
                period="Expected Graduation: July 2026"
                percentage="CGPA: 8.0/10"
            />
            <Education 
                // imageUrl=""
                name="Kendriya Vidyalaya No.1 Neemuch (M.P)" 
                course="Se" 
                period="Expected Graduation: July 2026"
                percentage="Percentage: 83.4%"
            />
        </div>
    
     );
}

export default Educations;