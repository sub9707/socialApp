import Image from "next/image"
import Comments from "./Comments"
import { Post as PostType, User } from "@prisma/client"

type FeedPostType = PostType & { user: User } & { likes: [{ userId: string }] } & { _count: { comments: number } }

const Post = ({ post }: { post: FeedPostType }) => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src={post.user.avatar || "/noAvatar.png"} alt="avatar" className="w-10 h-10 rounded-full" width={40} height={40} />
                    <span className="font-medium">{(post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}</span>
                </div>
                <Image src="/dots.png" alt="more" className="w-4 h-4" width={16} height={16} />
            </div>
            {/* DESCRIPTION */}
            <div className='flex flex-col gap-4'>
                {
                    post.image &&
                    <div className='w-full min-h-96 relative'>
                        <Image src={post.image} alt="more" className="object-cover rounded-md" fill />
                    </div>
                }
                <p>
                   {post.desc}
                </p>
            </div>
            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                        <Image src="/like.png" alt="more" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 명이 좋아함</span></span>
                    </div>
                    <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                        <Image src="/comments.png" alt="more" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 개의 댓글</span></span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-2 bg-slate-50 py-2 px-4 rounded-xl'>
                        <Image src="/share.png" alt="more" className="cursor-pointer" width={16} height={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 회 공유됨</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post