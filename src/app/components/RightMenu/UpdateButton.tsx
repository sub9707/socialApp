"use client"

import { useFormStatus } from "react-dom"

const UpdateButton = () => {

    const {pending} = useFormStatus();
  return (
    <button className="bg-blue-500 p-2 my-2 rounded-md text-white cursor-pointer disabled:bg-blue-500/50 disabled:cursor-not-allowed" disabled={pending}>{pending ? "업데이트 중...":"프로필 업데이트"}</button>
  )
}

export default UpdateButton