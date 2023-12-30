import React from 'react'

// function sample(){   
//      return (
//        <div>
//           <h1>Drive Ready</h1>
//        </div>    )
// }
// const main=()=>
// {
//     return (
//         <h2>boot camp  in night</h2>
//     )
// }



// const dd={
//     background:"blue",
//     color:"white"
// }
// const sample=(prop)=>{
//     return (
//         <>
//         <h1 className='bg'>This is{prop.set}</h1>
//         <h2 style={dd}>This is </h2>
//         <h3 style={{background:"green"}}>This is {prop.set}</h3>
//         </>
//     )
// }
const sample=(props)=>{
    const{name,days}=props
    return <h2>This is {name}{days}</h2>
}
export default sample