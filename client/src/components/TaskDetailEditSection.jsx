import { useEffect, useState } from 'react'

import dayjs from 'dayjs'

import DatePicker from "./DatePicker"

const TaskDetailEditSection = ({ taskDetail, setIsEdit }) => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [dueDate, setDueDate] = useState(new Date());
    const [isChecked, setIsChecked] = useState("")

    useEffect(()=> {
        console.log({taskDetail});
        setTaskTitle(taskDetail.taskTitle)
        setTaskDescription(taskDetail.taskDescription)
        setIsChecked(taskDetail.priority)

        const dueDateFromdb = dayjs(taskDetail.dueDate)
        const formattedDueDate = dueDateFromdb.format("YYYY-MM-DD")
        setDueDate(new Date(formattedDueDate))

        console.log({isChecked});
    }, []) 

    const handleTaskDetailSubmit = (e) => {
        e.preventDefault()
  
        setIsEdit(false)
      }
      
      const handleEditCancel = () => {
        
      }

  return (
    <form onSubmit={handleTaskDetailSubmit} className="border-2 border-blue-300 rounded-lg p-3 mb-3">
        <div className="flex items-start justify-between w-full rounded-t mb-3">
            <div className="w-full">
            <div className="flex flex-col">
                <label className="block text-gray-700 text-sm font-bold mb-2">Task title</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="taskTitle"
                    onChange={(e) => setTaskTitle(e.target.value)}
                    value={taskTitle}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">Task description</label>
                <textarea 
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    rows="4"
                    name="taskDescription"
                    placeholder="Task description"
                    onChange={(e) => setTaskDescription(e.target.value)}
                    value={taskDescription}
                />
                <div className="mt-2">
                <DatePicker dueDate={dueDate} setDueDate={setDueDate} />
                </div>
                {isChecked
                ? <label className="block text-gray-700 text-sm font-bold ml-1 flex items-end">
                        <input checked type="checkbox" value={isChecked} onChange={() => setIsChecked(!isChecked)} className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        High priority
                   </label>
                : <label className="block text-gray-700 text-sm font-bold ml-1 flex items-end">
                    <input type="checkbox" value={isChecked} onChange={() => setIsChecked(!isChecked)} className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    High priority
                   </label>
                }

                
            </div>
            </div>
        </div>
        <div className="flex items-center justify-end">
            <button
                type="submit"
                onClick={handleEditCancel}
                className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none hover:shadow-lg focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
                Cansel
            </button>
            <button
                type="submit"
                disabled={!(taskTitle && taskDescription)}
                className="bg-blue-400 text-white active:bg-blue-600 uppercase text-sm px-5 py-2 rounded shadow hover:shadow-lg hover:bg-blue-600 outline-none focus:outline-none ease-linear transition-all duration-150 disabled:opacity-50"
            >
                Save
            </button>
        </div> 
    </form>
  )
}

export default TaskDetailEditSection