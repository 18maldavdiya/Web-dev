
function Card(props){
    return (
    <div className="parent">
         <div className ="Card">
            <img src={props.img} alt ="MOON"></img>
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View profile!</button>
         </div>
    </div>
    );

   
}

export default Card;