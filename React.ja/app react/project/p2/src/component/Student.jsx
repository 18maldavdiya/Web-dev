function Student({name , cource ,marks}){
    return(
        <div className ='student-card'>
            <h2>Student name : {name}</h2>
            <p>cource :{cource}</p>
            <p>marks : {marks} {marks >=40 ? "Pass  " : "Fail"} </p>
        </div>
    )
}
export default Student;