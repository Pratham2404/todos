import express from 'express'
import { addTask, deleteTask, editTask, endTask, getCompleteTask, getIncompleteTask, getPendingTask, getTask, startTask } from '../controllers/todo.controllers.js'

const router = express.Router()

router.get("/getAllTasks",getTask)
router.get("/getIncompleteTasks",getIncompleteTask)
router.get("/getCompleteTasks",getCompleteTask)
router.get("/getPendingTasks",getPendingTask)
router.post("/addTask",addTask)
router.delete("/deleteTask/:id",deleteTask)
router.put("/editTask/:id",editTask)
router.put("/startTask/:id",startTask)
router.put("/endTask/:id",endTask)

export default router
