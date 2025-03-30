import Image from "next/image"
import Comments from "./Comments"
import { Post as PostType, User } from "@prisma/client"
import PostInteraction from "./PostInteraction"
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & { user: User } & { likes: [{ userId: string }] } & { _count: { comments: number } }

const Post = async ({ post }: { post: FeedPostType }) => {
    // 서버 사이드에서 사용자의 좋아요 상태 미리 계산
    const { userId } = await auth();
    const isUserLiked = userId ? post.likes.some(like => like.userId === userId) : false;
    
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
            <PostInteraction 
                postId={post.id} 
                likes={post.likes.map((like) => like.userId)} 
                commentNumber={post._count.comments}
                isUserLiked={isUserLiked} // 미리 계산된 사용자의 좋아요 상태 전달
            />
            <Comments postId={post.id} />
        </div>
    )
}

export default Post