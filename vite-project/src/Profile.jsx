function Profile()
{
    const name="Varshini Gundapu"
    const age=18
    const isstudent=true
    return (
        <div>
            <p>my name{name}</p>
            <p>my age is{age}</p>
            <p>{isstudent===true?"I am a student":"I am not a student"}</p>
        </div>
    )
}
export default Profile