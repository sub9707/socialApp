"use client";

import { addStory } from "@/library/actions";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { startTransition, useOptimistic, useState } from "react";

type StoryWithUser = Story & { user: User };

const StoryList = ({ stories }: { stories: StoryWithUser[] }) => {
    const { user, isLoaded } = useUser();
    const [storyList, setStoryList] = useState(stories);
    const [img, setImg] = useState<string | null>(null); // ✅ string 타입으로 변경
    const [optimisticStories, addOptimisticStory] = useOptimistic(
        storyList,
        (state, value: StoryWithUser) => [value, ...state]
    );

    if (!isLoaded) return "유저정보 로드 중...";
    if (!user) return null;

    const add = async () => {
        if (!img) return; // ✅ img가 없으면 실행 안 함
        startTransition(() => {
            addOptimisticStory({
                id: Math.random(),
                image: img,
                createdAt: new Date(),
                expiresAt: new Date(Date.now() + 25 * 60 * 60 * 1000),
                userId: user.id,
                user: {
                    id: user.id,
                    avatar: user.imageUrl || "/noAvatar.png",
                    username: user.username || "알 수 없음",
                    name: user.firstName || "알 수 없음",
                    surname: user.lastName || "",
                    city: "",
                    work: "",
                    school: "",
                    website: "",
                    createdAt: new Date(),
                    cover: "",
                    description: ""
                },
            })
        });

        try {
            const createdStory = await addStory(img); // ✅ 문자열만 전달
            if (createdStory) {
                setStoryList((prev) => [createdStory, ...prev]);
            }
            setImg(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <CldUploadWidget
                uploadPreset="social"
                onSuccess={(result, { widget }) => {
                    // ✅ 타입 가드 추가: result.info가 유효한지 확인
                    if (result && "info" in result && result.info && typeof result.info === "object") {
                        const info = result.info as { secure_url?: string }; // ✅ 안전한 타입 변환
                        if (info.secure_url) {
                            setImg(info.secure_url);
                        }
                    }
                    widget.close();
                }}
            >
                {({ open }) => (
                    <div className="flex flex-col items-center gap-2 cursor-pointer relative">
                        <Image
                            src={img || user.imageUrl || "/noAvatar.png"} // ✅ img는 문자열이므로 그대로 사용 가능
                            alt=""
                            className="w-20 h-20 rounded-full ring-2 ring-blue-300 blur-[2px] object-cover"
                            height={80}
                            width={80}
                            onClick={() => open()}
                        />
                        {img ? (
                            <button
                                className="text-xs bg-blue-500 p-1 rounded-md text-white"
                                onClick={add} // ✅ onClick 사용
                            >
                                등록
                            </button>
                        ) : (
                            <span className="font-bold">스토리 추가</span>
                        )}
                        <div className="absolute text-6xl text-gray-200 top-2 pointer-events-none">+</div>
                    </div>
                )}
            </CldUploadWidget>
            {optimisticStories.map((story) => (
                <div className="flex flex-col items-center gap-2 cursor-pointer" key={story.id}>
                    <Image
                        src={story.user.avatar || "/noAvatar.png"}
                        alt=""
                        className="w-20 h-20 rounded-full ring-2 ring-blue-300"
                        height={80}
                        width={80}
                    />
                    <span className="font-bold">{story.user.name || story.user.username}</span>
                </div>
            ))}
        </>
    );
};

export default StoryList;
