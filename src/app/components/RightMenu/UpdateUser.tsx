"use client"

import { User } from "@prisma/client"
import Image from "next/image";
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
              <h1 className="font-bold">프로필 수정</h1>
              <div className='mt-4 text-xs text-gray-500'>
                아바타 변경과 사용자명 변경은 상단바의 프로필을 이용해주세요.
              </div>
              <div className='flex flex-col gap-4 my-4'>
                <label htmlFor="">배경사진 변경</label>
                <div className='flex items-center gap-2 cursor-pointer'>
                  <Image src={user.cover || '/noCover.png'} alt="" width={48} height={32} className="w-12 h-8 rounded-md object-cover" />
                  <span className="text-xs underline text-gray-600">변경</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mb-4 gap-2 xl:gap-4">
                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">성</label>
                  <input type="text" placeholder={user.name || "홍"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="name"/>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">이름</label>
                  <input type="text" placeholder={user.surname || "길동"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="surname"/>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">나를 설명</label>
                  <input type="text" placeholder={user.description || "나를 표현해요..."} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="description"/>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">도시</label>
                  <input type="text" placeholder={user.city || "서울특별시"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="city"/>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">학교</label>
                  <input type="text" placeholder={user.school || "출신 학교"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="school"/>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">직장</label>
                  <input type="text" placeholder={user.work || "재직중"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="work"/>
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-[calc(50%-0.5rem)]">
                  <label className="text-xs text-gray-500">웹사이트</label>
                  <input type="text" placeholder={user.website || "www.example.co.kr"} className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm flex-1 w-full min-w-0" name="website"/>
                </div>
              </div>

              <button className="bg-blue-500 p-2 mt-2 rounded-md text-white cursor-pointer">수정 완료</button>
              <div className='absolute text-lg right-2 top-3 cursor-pointer' onClick={handleClose}>X</div>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default UpdateUser