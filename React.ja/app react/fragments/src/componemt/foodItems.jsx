
const FoodItems = () => {
    let foodItems = ['Dal', 'green veg', 'Roti', 'salad', 'Milk']
    return(
        
        <ul className="list-group">
        {foodItems.map((item) => (
            <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    )
}
export default FoodItems