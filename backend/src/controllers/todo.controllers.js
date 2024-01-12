import { Todo } from "../models/todo.models.js";


//Add New Task
const addTask = (req,res)=>{
    const {id,title,content} = req.body;
    const newTask = new Todo({id,title,content})
    newTask.save()
    .then(()=>{
        return res.status(200).json({message:"Task has been added successfully."})
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    }) 
}


// Delete task
const deleteTask = async (req,res) =>{
    const {id} = req.params;
    
    const data = await Todo.find({id:id})
    
    if(data.length===0){
        return res.json({message:"ID does not exist"})
    } 

    await Todo.findOneAndDelete({id:id})
    .then(()=>{
        return res.status(200).json({message:"Task has been deleted successfully."})
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    }) 
}


// Edit Task
const editTask = async (req,res)=>{
    const {id} = req.params
    const {title,content} = req.body

    const data = await Todo.find({id:id})
    
    if(data.length===0){
        return res.json({message:"ID does not exist"})
    } 

    await Todo.findOneAndUpdate({id:id},{title,content})
    .then(()=>{
        return res.status(200).json({message:"Task has been updated successfully."})
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    }) 
}


// Get complete list of tasks
const getTask = (req,res) =>{
    Todo.find({})
    .then((data)=>{
        return res.status(200).json(data)
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    })
    
}


// Get list of all incomplete tasks
const getIncompleteTask = (req,res) =>{
    Todo.find({currStatus:"not completed"})
    .then((data)=>{
        return res.status(200).json(data)
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    })
}


// Get list of all complete tasks
const getCompleteTask = async (req,res) =>{
    Todo.find({currStatus:"Completed"})
    .then((data)=>{
        return res.status(200).json(data)
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    })
}


// Get list of all pending tasks
const getPendingTask = (req,res) =>{
    Todo.find({currStatus:"In progress"})
    .then((data)=>{
        return res.status(200).json(data)
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    })
}


// Start a task
const startTask = async (req,res) =>{
    const {id} = req.params

    const data = await Todo.find({id:id})
    
    if(data.length===0){
        return res.json({message:"ID does not exist"})
    } 

    if(data[0].currStatus==="In Progress"){
        return (res.status(500).json({message:"Task has already been started"}))
    }

    if(data[0].currStatus==="Completed"){
        return (res.status(500).json({message:"Task has been already completed. Do you want to start again?"}))
    }

    Todo.findOneAndUpdate({id:id},{startDate: new Date(),currStatus:"In progress"})
    .then(()=>{
        return res.status(200).json({message:"Your task has been started" })
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    }) 
}

// End a task
const endTask = async (req,res) =>{
    const {id} = req.params

    const data = await Todo.find({id:id})
    
    if(data.length===0){
        return res.json({message:"ID does not exist"})
    } 


    // console.log(curr);

    if(data[0].currStatus==="not completed"){
        return (res.status(500).json({message:"Task has not been started"}))
    }

    if(data[0].currStatus==="Completed"){
        return (res.status(500).json({message:"Task has been already completed"}))
    }
    
    await Todo.findOneAndUpdate({id:id},{endDate: new Date(),currStatus:"Completed"})
    .then(()=>{
        return res.status(200).json({message:"Your task has been completed" })
    })
    .catch ((error)=>{
        return (res.status(500).json({ message: error.message }))
    })
}


export {addTask,deleteTask,editTask,getTask,getIncompleteTask,getCompleteTask,getPendingTask,startTask,endTask}