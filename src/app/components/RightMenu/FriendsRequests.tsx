import prisma from "@/library/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image"
import Link from "next/link"
import FriendRequestList from "./FriendRequestList";

const FriendsRequests = async() => {

    const {userId} = await auth();

    if(!userId) return null;

    const requests = await prisma.followRequest.findMany({
        where:{
            receiverId:userId
        },
        include:{
            sender:true,
        }
    });

    if(requests.length === 0 ) return null;

    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className="text-gray-500">친구 요청</span>
                <Link href="/" className="text-blue-500 text-sm">전체보기</Link>
            </div>
            {/* USER */}
            <FriendRequestList requests={requests}/>
        </div>
    )
}

export default FriendsRequests