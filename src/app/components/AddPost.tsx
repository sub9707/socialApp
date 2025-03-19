import prisma from "@/library/client"
import { auth } from "@clerk/nextjs/server";
import Image from "next/image"

const AddPost = async () => {

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* avatar */}
      <Image src={'https://images.pexels.com/photos/31043830/pexels-photo-31043830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
        alt='avatar'
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48} />
      {/* post */}
      <div className='flex-1'>
        {/* text input */}
        <form className='flex gap-4'>
          <textarea name="description" placeholder="지금 상태를 게시해요..." className="flex-1 bg-slate-100 rounded-lg p-2"></textarea>
          <Image src={'/emoji.png'}
            alt='emoji'
            className="w-5 h-5 cursor-pointer self-end"
            width={20}
            height={20} />
          <button>게시</button>
        </form>
        {/* post options */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/photo.png'}
              alt='photo'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            사진
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/video.png'}
              alt='video'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            동영상
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/poll.png'}
              alt='poll'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            투표
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/event.png'}
              alt='event'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            이벤트
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost