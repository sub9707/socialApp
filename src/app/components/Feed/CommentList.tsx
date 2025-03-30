"use client"

import { Comment, User } from "@prisma/client";
import Image from "next/image"

type CommentsWithUser = Comment & {user:User};

const CommentList = ({comments, postId}:{comments: CommentsWithUser[]; postId:number}) => {
    return (
        <div className=''>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/31080025/pexels-photo-31080025.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" className="w-8 h-8 rounded-full" width={32} height={32} />
                <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                    <input type="text" placeholder="댓글을 입력하세요." className="bg-transparent outline-none flex-1" />
                    <Image src="/emoji2.png" alt="avatar" className="cursor-pointer" width={16} height={16} />
                </div>
            </div>
            {/* COMMENTS */}
            <div className=''>
                <div className='flex gap-4 justify-between mt-6'>
                    {/* avatar */}
                    <Image src="https://images.pexels.com/photos/31080025/pexels-photo-31080025.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" className="w-10 h-10 rounded-full" width={40} height={40} />
                    {/* description */}
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className="font-medium">Garrett Burns</span>
                        <p>
                            Incididunt laborum nostrud duis proident veniam commodo eu laboris.
                            Voluptate dolor Lorem consequat consequat commodo nostrud veniam amet nulla laboris minim tempor.
                            Occaecat mollit cillum esse veniam. Tempor dolor enim aute Lorem sint aliqua labore exercitation anim pariatur enim ex pariatur officia.
                            Ut ipsum deserunt anim nostrud aliqua tempor adipisicing enim. Voluptate consequat qui dolore id cupidatat proident velit Lorem.
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
            </div>
        </div>
    )
}

export default CommentList