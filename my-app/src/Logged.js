import React,{useState}from 'react'
function Logged(){
    const[log,setLog]=useState(true)
    const checklogin=()=>{
        setLog(log)
    }
    return(
        <div>
            {log?<h1>logged in</h1>:<h1>not logged fail</h1>}
            <button onClick={check}>click</button>
        </div>


    )

}