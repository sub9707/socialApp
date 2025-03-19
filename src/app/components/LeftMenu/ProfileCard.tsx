import prisma from "@/library/client"
import { auth } from "@clerk/nextjs/server";
import Image from "next/image"

const ProfileCard = async() => {

    const {userId} = await auth();

    if(!userId) return;

    const user = await prisma.user.findFirst({
        where:{
            id: userId
        },
        include:{
            _count:{
                select:{
                    followers:true
                }
            }
        }
    });

    if(!user) return null;

    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src={user.cover || '/noCover.png'} alt="" fill className="rounded-md object-cover" />
                <Image src={user.avatar || '/noAvatar.png'} width={48} height={48} alt="" className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10" />
            </div>
            <div className='h-auto flex flex-col gap-2 items-center'>
                <span className="font-semibold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username }</span>
                <div className='flex items-center gap-4'>
                    <div className='flex'>
                        <Image src="https://images.pexels.com/photos/30819958/pexels-photo-30819958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={12} height={12} alt="" className="rounded-full w-3 h-3 object-cover" />
                        <Image src="https://images.pexels.com/photos/30819958/pexels-photo-30819958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={12} height={12} alt="" className="rounded-full w-3 h-3 object-cover" />
                        <Image src="https://images.pexels.com/photos/30819958/pexels-photo-30819958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={12} height={12} alt="" className="rounded-full w-3 h-3 object-cover" />
                    </div>
                    <span className="text-xs text-gray-500">{user._count.followers}명이 팔로우함</span>
                </div>
                <button className="bg-blue-500 text-white text-xs px-4 py-2 mt-3 rounded-md">내 프로필</button>
            </div>
        </div>
    )
}

export default ProfileCard