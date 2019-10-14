import React from 'react'

function raihan(props){
    console.log(props);
    function something(value){
        alert(value)
    }
    return (
    <div>
        <button onClick={something.bind(this,"outhput")}>Click Me</button>
        <h1 className="next">My Name Is {props.name} age {props.age} </h1>
        {props.children}
    </div>
    )
}

//export const Raihan = () => <h1>My name is Raihan</h1>

export default raihan

