import React from 'react'

function ErrorMessage() {
    let foodItems = ['Dal', 'green veg', 'Roti', 'salad', 'Milk']
    return (
        <>
            {foodItems.length === 0 ? <h3>food is not present</h3> : null}
        </>
    )
}

export default ErrorMessage
