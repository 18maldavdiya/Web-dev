function Student({name , cource ,marks}){
    return(
        <div className ='student-card'>
            <h2>Student name : {name}</h2>
            <p>cource :{cource}</p>
            <p>{marks >=90 ? "A" :marks >=60? "B" : "C"}</p>
        </div>
    )
}
export default Student;