import prisma from "@/library/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import { notFound } from "next/navigation";
import UpdateUser from "./UpdateUser";

const UserInfoCard = async ({ user }: { user: User }) => {
    let isUserBlocked = false;
    let isFollowing = false;
    let isFollowingSent = false;

    const { userId: currentUserId } = await auth();

    if (currentUserId) {
        const blockRes = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: user.id
            }
        })

        blockRes ? (isUserBlocked = true) : (isUserBlocked = false);
        const followRes = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user.id
            }
        })

        followRes ? (isFollowing = true) : (isFollowing = false);
        const followReqRes = await prisma.followRequest.findFirst({
            where: {
                senderId: currentUserId,
                receiverId: user.id
            }
        })

        followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
    } else {
        return notFound();
    }
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className="text-gray-500">사용자 정보</span>
                {
                    currentUserId === user.id ? (<UpdateUser user={user}/>):( <Link href="/" className="text-blue-500 text-sm">전체보기</Link>)
                }

            </div>
            {/* BOTTOM */}
            <div className='flex items-center gap-2 text-gray-500'>
                <span className="text-xl text-black font-semibold">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
                <span className="text-sm">@{user.username}</span>
            </div>
            {
                user.description && <p>{user.description}</p>
            }
            {
                user.city &&
                <div className='flex items-center gap-2'>
                    <Image src="/map.png" alt="map" width={16} height={16} className="" />
                    <span><b>{user.city}</b>에 거주</span>
                </div>
            }
            {
                user.school &&
                <div className='flex items-center gap-2'>
                    <Image src="/school.png" alt="school" width={16} height={16} className="" />
                    <span><b>{user.school}</b> 졸업</span>
                </div>
            }
            {
                user.work &&
                <div className='flex items-center gap-2'>
                    <Image src="/work.png" alt="work" width={16} height={16} className="" />
                    <span><b>{user.work}</b>에서 근무 중</span>
                </div>
            }
            <div className='flex items-center justify-between'>
                {
                    user.website &&
                    <div className='flex gap-1 items-center'>
                        <Image src="/link.png" alt="link" width={16} height={16} className="" />
                        <Link href={'/'} className="text-blue-500 font-medium">{user.website}</Link>
                    </div>
                }
                <div className='flex gap-1 items-center'>
                    <Image src="/date.png" alt="link" width={16} height={16} className="" />
                    <span>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit' }).format(new Date(user.createdAt))} 가입</span>
                </div>
            </div>
            {
                (currentUserId && currentUserId !== user.id) &&
                <UserInfoCardInteraction userId={user.id} isUserBlocked={isUserBlocked} isFollowing={isFollowing} isFollowingSent={isFollowingSent} />
            }
        </div>
    )
}

export default UserInfoCard