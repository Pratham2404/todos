import express from 'express'
import { addTask, deleteTask, editTask, endTask, getCompleteTask, getIncompleteTask, getPendingTask, getTask, startTask } from '../controllers/todo.controllers.js'

const router = express.Router()

router.get("/getAllTasks",getTask)
router.get("/getIncompleteTasks",getIncompleteTask)
router.get("/getCompleteTasks",getCompleteTask)
router.get("/getPendingTasks",getPendingTask)
router.post("/addTask",addTask)
router.get("/deleteTask/:id",deleteTask)
router.post("/editTask/:id",editTask)
router.post("/startTask/:id",startTask)
router.post("/endTask/:id",endTask)

export default router
