"use client"

import { addComment } from "@/library/actions";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image"
import { useOptimistic, useState } from "react";

type CommentsWithUser = Comment & { user: User };

const CommentList = ({ comments, postId }: { comments: CommentsWithUser[]; postId: number }) => {

    const { user } = useUser();
    const [commentState, setCommentState] = useState(comments);
    const [desc, setDesc] = useState("");

    const [optimisticComments, addOptimisiticComment] = useOptimistic(commentState,
        (state, value: CommentsWithUser) => [value, ...state]
    );

    const add = async()=>{
        if(!user || !desc) return;

        addOptimisiticComment({
            id:Math.random(),
            desc,
            createdAt: new Date(Date.now()),
            updatedAt: new Date(Date.now()),
            userId:user.id,
            postId:postId,
            user:{
                id:user.id,
                avatar:user.imageUrl || "/noAvatar.png",
                description:"",
                cover:"",
                username:"댓글 등록 중입니다...",
                name:"",    
                surname:"",
                city:"",
                work:"",
                school:"",
                website:"",
                createdAt:new Date(Date.now())
            }
        });
        try {
            const createdComment = await addComment(postId, desc);
            setCommentState((prev)=>[createdComment, ...prev])
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {
                user &&
                <div className='flex items-center gap-4'>
                    <Image src={user?.imageUrl || "/noAvatar.png"} alt="avatar" className="w-8 h-8 rounded-full" width={32} height={32} />
                    <form action={add} className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                        <input type="text" placeholder="댓글을 입력하세요." className="bg-transparent outline-none flex-1" onChange={e => setDesc(e.target.value)} />
                        <button><Image src="/emoji2.png" alt="avatar" className="cursor-pointer" width={16} height={16} /></button>
                    </form>
                </div>
            }

            {/* COMMENTS */}
            <div className=''>
                {optimisticComments.map(comment => (
                    <div className='flex gap-4 justify-between mt-6' key={comment.id}>
                        {/* avatar */}
                        <Image src={comment.user.avatar || "noAvatar.png"} alt="avatar" className="w-10 h-10 rounded-full" width={40} height={40} />
                        {/* description */}
                        <div className='flex flex-col gap-2 flex-1'>
                            <span className="font-medium">{comment.user.name && comment.user.surname ? comment.user.name + " " + comment.user.surname : comment.user.username}</span>
                            <p>
                                {comment.desc}
                            </p>
                            <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                                <div className='flex items-center gap-4'>
                                    <Image className='cursor-pointer w-4 h-4' src="/like.png" width={16} height={16} alt="icon" />
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">123 명이 좋아요</span>
                                </div>
                                <div className=''>답글 작성</div>
                            </div>
                        </div>
                        {/* icon */}
                        <Image className='cursor-pointer w-4 h-4' src="/dots.png" width={16} height={16} alt="icon" />
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default CommentList