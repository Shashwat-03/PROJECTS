import React from "react"
import axios from 'axios'
class CRUDOps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[],
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            update:false,
            statusText:''
        }
    }
   componentDidMount=()=>{
      axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    handleContact=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/empDetails',{
            fname:'ipUser',
            email:'ipEmail',
            phone:'ipPhone'
        }).then((res)=>this.setState({statusText:"created user successfully"})).catch((err)=>this.setState({statusText:'An Error Occured '}))
        axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    deleteUser=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>this.setState({statusText:"deleted"})).catch((err)=>console.log(err))
        axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    handleUpdate=(e,itemid)=>{
        axios.patch(`http://localhost:3001/empDetails/${itemid}`,{
            fname:'Peter'
        }).then((res)=>this.setState({statusText:"updated"})).catch((err)=>console.log(err))
    }
    handleChange=(e,key)=>{
        if(key==='uname')
        this.setState({ipUser:e.target.value})
        if(key==='phone')
        this.setState({ipPhone:e.target.value})
        if(key==='email')
        this.setState({ipEmail:e.target.value})
        if(key==='addr')
        this.setState({ipAddress:e.target.value})    
       }
        
    render(){
        return(
            <div>
                <h1>API Calls</h1>
                <form>
                Username:<input type='text' onChange={(e)=>this.handleChange(e,'uname')}></input>
                Phone:<input type='text' onChange={(e)=>this.handleChange(e,'phone')}></input>
                Email:<input type='text' onChange={(e)=>this.handleChange(e,'email')}></input>
                Address:<input type='text' onChange={(e)=>this.handleChange(e,'addr')}></input>
                {
                    this.state.update?<button onClick={(e)=>this.handleUpdate(e)}>update contact</button>:<button onClick={(e)=>this.handleContact(e)}>add contact</button>
                }
                
                </form>
               {/* <button onClick={(e)=>this.createUser(e)}>create</button>
               <button onClick={(e)=>this.updateUser(e,1658726368524)}>update</button> */}
               
               <h3>{this.state.statusText}</h3>
                {
                    this.state.results.map((item)=>(
                        <div>
                            <h2>{item.fname}</h2>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <button onClick={(e)=>this.deleteUser(e,item.id)}>delete</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CRUDOps
