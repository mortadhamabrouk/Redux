import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/todoActions'

const Addtask = () => {
    const dispatch=useDispatch()
    const description=useRef()
  return (
    <div>
        <input type='text' placeholder='Type description' ref={description}></input>
        <button onClick={()=>{dispatch(addTask(description.current.value))}}>New Task</button>
    </div>
  )
}

export default Addtask