"use client"

import { switchLike } from "@/library/actions";
import Image from "next/image"
import { useOptimistic, useState } from "react";

// isUserLiked 프롭 추가
const PostInteraction = ({ postId, likes, commentNumber, isUserLiked }: { postId: number, likes: string[], commentNumber: number, isUserLiked: boolean }) => {
    // 서버에서 계산된 초기 상태 사용
    const [likeState, setLikeState] = useState({
        likeCount: likes.length,
        isLiked: isUserLiked // 서버에서 계산된 값 사용
    });

    const [optimisticLike, switchOptimisiticLike] = useOptimistic(likeState, (state, value) => {
        return {
            likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
            isLiked: !state.isLiked
        }
    });

    const likeAction = async() => {
        switchOptimisiticLike("");
        try {
            await switchLike(postId);
            setLikeState((state) => ({
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked
            }));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-4'>
                <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                    <form action={likeAction}>
                        <button>
                            <Image 
                                src={optimisticLike.isLiked ? "/liked.png" : "/like.png"} 
                                alt={optimisticLike.isLiked ? "liked" : "like"} 
                                className="cursor-pointer" 
                                width={16} 
                                height={16} 
                                priority 
                            />
                        </button>
                    </form>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">{optimisticLike.likeCount}<span className="hidden md:inline"> 명이 좋아함</span></span>
                </div>
                <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                    <Image src="/comments.png" alt="comments" className="cursor-pointer" width={16} height={16} />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">{commentNumber}<span className="hidden md:inline"> 개의 댓글</span></span>
                </div>
            </div>
            <div className=''>
                <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                    <Image src="/share.png" alt="share" className="cursor-pointer" width={16} height={16} />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500"><span className="hidden md:inline">공유</span></span>
                </div>
            </div>
        </div>
    )
}

export default PostInteraction