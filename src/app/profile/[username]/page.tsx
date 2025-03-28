import Feed from "@/app/components/Feed/Feed"
import LeftMenu from "@/app/components/LeftMenu/LeftMenu"
import RightMenu from "@/app/components/RightMenu/RightMenu"
import prisma from "@/library/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { notFound } from "next/navigation"

const Profile = async({params}:{params:{username:string}}) => {

  const {username} = await params;

  const user = await prisma.user.findFirst({
    where:{
      username
    },
    include:{
      _count:{
        select:{
          followers:true,
          followings:true,
          posts:true,
        }
      }
    }
  });

  if(!user) return notFound;

  const {userId: currentUserId} = await auth();

  let isBlocked;

  if(currentUserId){
    const res = await prisma.block.findFirst({
      where:{
        blockerId:user.id,
        blockedId:currentUserId
      },
    });
    if(res) isBlocked = true;
  }else{
    isBlocked = false;
  }

  if(isBlocked) return notFound();

  return (
    <div className="flex gap-6 pt-6">
      <div className='hidden xl:block w-[20%]'><LeftMenu type="profile"/></div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image src={user.cover || "/noCover.png"} fill alt=""className="rounded-md object-cover"/>
              <Image src={user.avatar || "/noAvatar.png"} alt=""  width={128} height={128} className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"/>
            </div>
            <h1 className="mt-20 pb-4 text-2xl font-bold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username }</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                <span className="font-semibold">{user._count.posts}</span>
                <span className="text-sm">게시글</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className="font-semibold">{user._count.followers}</span>
                <span className="text-sm">팔로잉</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className="font-semibold">{user._count.followings}</span>
                <span className="text-sm">팔로워</span>
              </div>
            </div>
          </div>
          <Feed username={user.username}/>
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'><RightMenu user={user} /></div>
    </div>
  )
}

export default Profile