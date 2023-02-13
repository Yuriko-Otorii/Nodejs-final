import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Board from '../components/Board'
import HamburgerMenu from '../components/HamburgerMenu'
import NewBoardModal from '../components/NewBoardModal';
import NewTaskModal from '../components/NewTaskModal';

const DashBoard = () => {
    const [showNewBoardModal, setShowNewBoardModal] = useState(false);
    const [showNewTaskModal, setShowNewTaskModal] = useState({
        boardId: null,
        modalState: false
    });
    const [allBoards, setAllboads] = useState([])
    const [updatestate, setUpdateState] = useState(false)
    const user = useSelector((state) => state.auth.user)
    
    useEffect(() => {
        const fetchAllBoards = async () => {
          const response = await fetch("http://localhost:8000/dashboard/getallboards", {
            method: 'POST',
            body: JSON.stringify({ userId: user.userId }),
            headers: { 'Content-Type': 'application/json' },
          })
          if (!response.ok) {
            console.log('Something went wrong...')
          } else {
            const result = await response.json()
            setAllboads(result)
            console.log(result);
          }
        }

        fetchAllBoards()
      }, [updatestate])

  return (
    <div className="flex relative h-full min-h-screen w-fit min-w-full md:h-fit p-4">
        <div
            className="overlay absolute inset-0 z-0 bg-gradient-to-r from-teal-400 to-yellow-200 opacity-20"
        ></div>
        <div className='w-full flex flex-col z-40'>
            <div className='flex justify-between items-center'>
                <div className='md:hidden'></div>
                <div className=''>

                </div>
                <div className='md:order-1'>
                    <HamburgerMenu />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-start flex-col gap-4 w-full pt-3 md:flex-row md:w-fit'>
                    {allBoards.length > 0 && (
                        allBoards.map(eachBoard => <Board key={eachBoard._id} boardInfo={eachBoard} setShowNewTaskModal={setShowNewTaskModal}/>)
                    )}
                </div>
                <div className='flex justify-center ml-12 mr-4 hidden md:block'>
                    <button onClick={() => setShowNewBoardModal(true)} type='button' className='flex w-40 py-10 px-5 items-center justify-center inline-block p-1 border-2 border-gray-400 text-gray-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        New board
                    </button>
                </div>
            </div>
            <div className='flex justify-center mt-10 md:hidden'>
                <button onClick={() => setShowNewBoardModal(true)} type='button' className='flex w-56 items-center justify-center inline-block px-1 py-5 border-2 border-gray-400 text-gray-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New board
                </button>
            </div>
        </div>
        {showNewBoardModal && (
            <NewBoardModal setShowNewBoardModal={setShowNewBoardModal} setUpdateState={setUpdateState} />
        )}
        {showNewTaskModal.modalState && (
            <NewTaskModal setShowNewTaskModal={setShowNewTaskModal} boardId={showNewTaskModal.boardId} setUpdateState={setUpdateState} />
        )}
    </div>
  )
}

export default DashBoard