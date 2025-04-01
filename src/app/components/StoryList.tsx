"use client";

import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & {
    user: User
}

const StoryList = ({ stories }: { stories: StoryWithUser[] }) => {
    const [storyList, setStoryList] = useState(stories);
    const [img, setImg] = useState<any>();

    const { user } = useUser();

    const [optimisticStories, addOptimisticStory] = useOptimistic(storyList, (state, value: StoryWithUser) => [value, ...state])

    return (
        <>
            <CldUploadWidget uploadPreset="social" onSuccess={(result, { widget }) => { setImg(result.info); widget.close(); }}>
                {({ open }) => {
                    return (
                        <div className='flex flex-col items-center gap-2 cursor-pointer relative'>
                            <Image src={img?.secure_url || user?.imageUrl || "/noAvatar.png"} alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300 blur-[2px]" height={80} width={80} />
                            <span className="font-bold">스토리 추가</span>
                            <div className='absolute text-6xl text-gray-200 top-2'>+</div>
                        </div>
                    );
                }}
            </CldUploadWidget>
            {
                optimisticStories.map((story) => (
                    <div className='flex flex-col items-center gap-2 cursor-pointer'>
                        <Image src={story.user.avatar || "/noAvatar.png"} alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80} />
                        <span className="font-bold">{story.user.name || story.user.username}</span>
                    </div>
                ))
            }
        </>

    )
}



export default StoryList