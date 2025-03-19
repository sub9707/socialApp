import Link from "next/link"
import Image from "next/image"
import ProfileCard from "./ProfileCard"
import Ad from "../Ad"

const LeftMenu = ({type}:{type:"home"|"profile"}) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        type === "home" && <ProfileCard/>
      }
      <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-2 text-gray-500'>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/posts.png" alt="posts" width={20} height={20}/>
          <span>내 게시글</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/activity.png" alt="posts" width={20} height={20}/>
          <span>활동</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/market.png" alt="posts" width={20} height={20}/>
          <span>마켓플레이스</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/events.png" alt="posts" width={20} height={20}/>
          <span>이벤트</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/albums.png" alt="posts" width={20} height={20}/>
          <span>내 앨범</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/videos.png" alt="posts" width={20} height={20}/>
          <span>비디오</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/news.png" alt="posts" width={20} height={20}/>
          <span>소식</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/courses.png" alt="posts" width={20} height={20}/>
          <span>교육과정</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/lists.png" alt="posts" width={20} height={20}/>
          <span>리스트</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"/>
        <Link href="" className="flex items-center gap-4 p-2 hover:bg-slate-100">
          <Image src="/settings.png" alt="posts" width={20} height={20}/>
          <span>설정</span>
        </Link>
      </div>
      <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu