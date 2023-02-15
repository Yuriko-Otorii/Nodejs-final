const {
  getAllBoards,
  saveNewBoard,
  saveNewTask,
  deleteBoard,
  getTaskDetail,
  saveTaskComment,
  updateBoardTitle,
  deleteTask
} = require('../middlewares/dashBoard.service')

exports.getAllBoardsController = async (req, res, next) => {
  try {
    const allBoards = await getAllBoards(req.body)
    return res.send({ error: false, allBoards })
  } catch (error) {
    console.log(erro)
  }
}

exports.saveNewBoardController = async (req, res, next) => {
  try {
    await saveNewBoard(req.body)
    return res.send({ error: false })
  } catch (error) {
    console.log(error)
  }
}

exports.updateBoardTitleController = async (req, res, next) => {
  try {
    await updateBoardTitle(req.body)
    return res.send({ error: false })
  } catch (error) {
    console.log(error)
  }
}

exports.deleteBoardController = async (req, res, next) => {
  try {
    await deleteBoard(req.body)
    return res.send({ error: false })
  } catch (error) {
    console.log(error)
  }
}

exports.getTaskDetailController = async (req, res, next) => {
  try {
    const taskDetail = await getTaskDetail(req.body)
    return res.send({ error: false, taskDetail })
  } catch (error) {
    console.log(error)
  }
}

exports.saveNewTaskController = async (req, res, next) => {
  try {
    await saveNewTask(req.body)
    return res.send({ error: false })
  } catch (error) {
    console.log(error)
  }
}

exports.saveTaskCommentController = async (req, res, next) => {
  try {
    await saveTaskComment(req.body)
    return res.send({ error: false })
  } catch (error) {
    console.log(error)
  }
}

exports.deleteTaskController  = async (req, res, next) => {
  try {
    await deleteTask(req.body)
    return res.send({ error: false })
  } catch (error) {
    console.log(error)
  }
}
