import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const List=useSelector(state=>state.todo)
  return (
    <div>{List.map(el=><Task data={el} />)}</div>
  )
}

export default ListTask