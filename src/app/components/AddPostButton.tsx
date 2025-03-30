"use client"

import { useFormStatus } from "react-dom"

const AddPostButton = () => {
    const { pending } = useFormStatus();
    return (
        <button className='bg-blue-500 disabled:bg-blue-300 p-2 mt-2 rounded-md cursor-pointer text-white disabled:cursor-not-allowed' disabled={pending}>
            {pending ? <div className='flex items-center justify-center gap-2'>
                <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'>
                게시 중
                </div>
            </div>
                : "게시"
            }
        </button>
    )
}

export default AddPostButton