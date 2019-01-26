import React from 'react';

// function Car () {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => (
// <div>
//     This is car component
//     <strong> test</strong>

// </div>
// )



export default (props) => (
    <div>
     <h3>Car name: {props.name}</h3>
     <p>Year: <strong>{props.year}</strong> </p>

    </div>
)