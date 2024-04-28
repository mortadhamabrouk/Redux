import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../redux/actions/todoActions'

const Task = (props) => {
    const List=useSelector(state=>state.todo)

    const dispatch=useDispatch()
    const [mystyle,setmyStyle]=useState({color:"red"})
    useState(()=>{
       if (props.data.isDone==true){
        setmyStyle({color:"green"})
       }
})
  return (
    <div>
        <h2 style={mystyle}>{props.data.description}</h2>
        <button onClick={()=>{
            dispatch(updateTask(props.data.id))
        }}>Update Status</button>
        </div>
  )
}

export default Task