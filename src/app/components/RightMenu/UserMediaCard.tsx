import prisma from "@/library/client"
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

const UserMediaCard = async({ user }: { user: User }) => {

  const postsWithMedia = await prisma.post.findMany({
    where:{
      userId:user.id,
      image:{
        not:null
      }
    },
    take:8,
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* TOP */}
      <div className='flex justify-between items-center font-medium'>
        <span className="text-gray-500">갤러리</span>
        <Link href="/" className="text-blue-500 text-sm">전체보기</Link>
      </div>
      {/* BOTTOM */}
      <div className='flex gap-4 justify-between flex-wrap'>
        {
          postsWithMedia.length ? postsWithMedia.map(post=>(
        <div className='relative w-1/5 h-24' key={post.id}>
          <Image src={post.image!} alt='' fill className="object-cover rounded-md"/> 
        </div>
          )) : "등록된 게시물이 없습니다."
        }
        
      </div>
    </div>
  )
}

export default UserMediaCard