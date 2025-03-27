"use client"

import { acceptFollowRequest, declineFollowRequest } from "@/library/actions"
import { FollowRequest, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type RequestWithUser = FollowRequest & {
    sender: User
}

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests);
    const [optimisticRequests, removeOptimisiticRequest] = useOptimistic(requestState, (state, value: number) => (state.filter(req => req.id !== value)));

    const accept = async (requestId: number, userId: string) => {
        removeOptimisiticRequest(requestId);
        try {
            await acceptFollowRequest(userId);
            setRequestState(prev => prev.filter((req) => req.id !== requestId));
        } catch (error) {
            console.error(error);
        }
    }
    const decline = async (requestId: number, userId: string) => {
        removeOptimisiticRequest(requestId);
        try {
            await declineFollowRequest(userId);
            setRequestState(prev => prev.filter((req) => req.id !== requestId));
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className=''>
            {
                optimisticRequests.map((request) => (
                    <div className='flex items-center justify-between' key={request.id}>
                        <div className='flex items-center gap-4'>
                            <Image src={request.sender.avatar || "/noAvatar.png"} alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                            <span className="font-semibold">{(request.sender.name && request.sender.surname) ? request.sender.name + " " + request.sender.surname : request.sender.username}</span>
                        </div>
                        <div className='flex gap-3 justify-end'>
                            <form action={() => accept(request.id, request.senderId)}>
                                <button>
                                    <Image src="/accept.png" alt="accept" width={20} height={20} className="w-5 h-5 cursor-pointer" />
                                </button>
                            </form>
                            <form action={() => decline(request.id, request.senderId)}>
                                <button>
                                    <Image src="/decline.png" alt="reject" width={20} height={20} className="w-5 h-5 cursor-pointer grayscale" />
                                </button>
                            </form>
                        </div>
                    </div>
                ))
            }

        </div>

    )
}

export default FriendRequestList