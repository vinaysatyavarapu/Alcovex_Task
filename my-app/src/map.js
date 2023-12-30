import React from "react"
function Listmap(){
    //let arr=[1,2,3,4,5]
    // let arr=["ravi","anitha","venu"]
    let Trainee=[
        {
            name:"vinay",
            roll:"1234",
            collge:"acet"
        },
        {
            name:"vasu",
            roll:"1233",
            collge:"ace"
        },
        {
            name:"venkey",
            roll:"1244",
            collge:"acoe"
        }
    ]



// return(
//     <div>
//         <ul>
//             {arr.map((ele,index)=>{ 
//                 return <li key={index}>{ele}</li>

//            )}

            
//         </ul>
//     </div>
// )
       return (
        <div>
            <table>
                {Trainee.map(ele,index)=>{
                    return

                }}
            </table>
        </div>
       )
        }
        export default Listmap