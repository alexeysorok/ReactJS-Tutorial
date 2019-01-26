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



export default () => (
    <div>
     <p>This is car component</p>
     <p><strong>{Math.round(Math.random() * 100)}</strong> </p>

    </div>
)