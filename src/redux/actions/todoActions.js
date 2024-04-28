export const addTask=(data)=>{
    return {
        type:"NEW",
        payload:data
    }
}

export const updateTask=(data)=>{
    return {
        type:"UPDATE",
        payload:data
    }
}