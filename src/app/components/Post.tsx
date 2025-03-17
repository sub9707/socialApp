import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/30894155/pexels-photo-30894155.png?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" className="w-10 h-10 rounded-full" width={40} height={40} />
                    <span className="font-medium">James Collins</span>
                </div>
                <Image src="/dots.png" alt="more" className="w-4 h-4" width={16} height={16} />
            </div>
            {/* DESCRIPTION */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src="https://images.pexels.com/photos/31097391/pexels-photo-31097391.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="more" className="object-cover rounded-md" fill />
                </div>
                <p>
                    Dolor sint magna est velit consequat voluptate incididunt do exercitation qui fugiat quis culpa Lorem.
                    Sint ut fugiat sit elit officia culpa.
                    Laboris mollit voluptate consequat ea consequat anim dolor sit elit eu.
                    Mollit aliquip voluptate magna tempor deserunt.
                </p>
            </div>
            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                        <Image src="/like.png" alt="more" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 명이 좋아함</span></span>
                    </div>
                    <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                        <Image src="/comments.png" alt="more" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 개의 댓글</span></span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                        <Image src="/share.png" alt="more" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 회 공유됨</span></span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post