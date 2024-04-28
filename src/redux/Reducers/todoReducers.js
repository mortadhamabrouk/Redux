import { v4 as uuidv4 } from 'uuid';

const todoReducers=(state=[{
    id:uuidv4(),
    description:"Eat",
    isDone:true
}],action)=>{
  switch (action.type) {
    case "NEW":
        return [...state,{
            id:uuidv4(),
            description:action.payload,
            isDone:false
        }]
        break;
  case "UPDATE":
    return state.map(el=>el.id==action.payload? {...el,isDone:!el.isDone}:el)
    default:
        return state
        break;
  }
}

export default todoReducers