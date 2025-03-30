"use client";

import prisma from "@/library/client"
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image"
import { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/library/actions";

const AddPost = () => {

  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) return "로드 중...";

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* avatar */}
      <Image src={user?.imageUrl || "/noAvatar.png"}
        alt='avatar'
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48} />
      {/* post */}
      <div className='flex-1'>
        {/* text input */}
        <form className='flex gap-4' action={(formData)=>addPost(formData, img?.secure_url || "")}>
          <textarea name="description" placeholder="지금 상태를 게시해요..." className="flex-1 bg-slate-100 rounded-lg p-2" onChange={(e) => setDesc(e.target.value)}></textarea>
          <div className="">
            <Image src={'/emoji.png'}
              alt='emoji'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            <AddPostButton />
          </div>
        </form>
        {/* post options */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <CldUploadWidget uploadPreset="social" onSuccess={(result, { widget }) => { setImg(result.info); widget.close(); }}>
            {({ open }) => {
              return (
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => open()}>
                  <Image src={'/photo.png'}
                    alt='photo'
                    className="w-5 h-5 cursor-pointer self-end"
                    width={20}
                    height={20} />
                  사진
                </div>
              );
            }}
          </CldUploadWidget>

          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/video.png'}
              alt='video'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            동영상
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/poll.png'}
              alt='poll'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            투표
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src={'/event.png'}
              alt='event'
              className="w-5 h-5 cursor-pointer self-end"
              width={20}
              height={20} />
            이벤트
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost