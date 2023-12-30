import React,{Component} from "react";

class Hai extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    increment(){
        this.setState({
            count : this.state.count+1
        }, ()=>{console.log(this.state.count)})
    }
    render(){
        return(
            <>
            <h1>Count is : {this.state.count}</h1>
            <button onClick = {()=>this.increment()}>Click Here</button>
            </>
        )   
    }
}
export default Hai;