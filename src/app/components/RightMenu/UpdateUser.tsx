"use client"

import { User } from "@prisma/client"
import { useState } from "react"

const UpdateUser = ({ user }: { user: User }) => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className=''>
      <span className="text-blue-500 text-xs cursor-pointer" onClick={() => setOpen(true)}>정보 수정</span>
      {
        open && (
          <div className='fixed w-screen h-screen top-0 left-0 bg-black/65 flex justify-center items-center z-50'>
            <form className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative">
              Test
              <div className='absolute text-lg right-2 top-3 cursor-pointer' onClick={handleClose}>X</div>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default UpdateUser