import React ,{useState} from 'react'
function Funcount(){
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <div>Value is{count}</div>
            <button onClick={increment}></button>
        </div>
    )
}
export default Funcount;