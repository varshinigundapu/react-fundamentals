import "./Avatar.css"
function idcard(course)
{
    return (
        
        <div className="co" >
            <img 
        src="public/OIP.webp"
        alt="Profile"
        />
            <p className="t"> {course.name}</p>
            <p className="c">Course:{course.course }</p>
            <p className="h"> RollNo:{course.RollNo}</p>
            <p className="i">BloodGroup:{course.bloodGroup}</p>
            <p className="j">Dob:{course.dOB}</p>
            
        </div>
    )
}
export default idcard
