"use server"

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";

export const switchFollow = async (userId: string) => {
    const { userId: currentUserId } = await auth();

    if (!currentUserId) throw new Error("User is not authenticated.");
    try {
        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: userId,
            },
        });
        if (existingFollow) {
            await prisma.follower.delete({
                where: {
                    id: existingFollow.id,
                },
            });
        } else {
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where: {
                    senderId: currentUserId,
                    receiverId: userId,
                }
            });

            if (existingFollowRequest) {
                await prisma.followRequest.delete({
                    where: {
                        id: existingFollowRequest.id
                    }
                })
            } else {
                await prisma.followRequest.create({
                    data: {
                        senderId: currentUserId,
                        receiverId: userId,
                    }
                })
            }
        }
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while Following Action.");
    }
}

export const switchBlock = async(userId:string) =>{
    const{userId:currentUserId} = await auth();

    if(!currentUserId){
        throw new Error("User is not Authenticated.");
    }
    try {
        const exisitingBlock = await prisma.block.findFirst({
            where:{
                blockerId:currentUserId,
                blockedId: userId,
            }
        });
        if(exisitingBlock){
            await prisma.block.delete({
                where:{
                    id:exisitingBlock.id
                }
            })
        }else{
            await prisma.block.create({
                data:{
                    blockerId: currentUserId,
                    blockedId: userId,
                }
            })
        }
        
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong while switching Block action.");
    }
}

export const acceptFollowRequest = async(userId:string)=>{
    const {userId:currentUserId} = await auth();

    if(!currentUserId){
        throw new Error("User is not Authenticated.");
    }
    try {
        const exisitingFollowRequest = await prisma.followRequest.findFirst({
            where:{
                senderId:userId,
                receiverId:currentUserId
            }
        });
    
        if(exisitingFollowRequest){
            await prisma.followRequest.delete({
                where:{
                    id:exisitingFollowRequest.id
                }
            });
    
            await prisma.follower.create({
                data:{
                    followerId:userId,
                    followingId:currentUserId,
                }
            })
        }
    } catch (error) {
        console.error(error);
        throw new Error('Something went wrong while Following action.');
    }
}

export const declineFollowRequest = async(userId:string)=>{
    const {userId:currentUserId} = await auth();

    if(!currentUserId){
        throw new Error("User is not Authenticated.");
    }
    try {
        const exisitingFollowRequest = await prisma.followRequest.findFirst({
            where:{
                senderId:userId,
                receiverId:currentUserId
            }
        });
    
        if(exisitingFollowRequest){
            await prisma.followRequest.delete({
                where:{
                    id:exisitingFollowRequest.id
                }
            });

        }
    } catch (error) {
        console.error(error);
        throw new Error('Something went wrong while Following action.');
    }
}

export const updateProfile = async (prevState:{success:boolean, error:boolean}, payload:{formData: FormData, cover:string}) => {

    const {formData, cover} = payload;
    const fields = Object.fromEntries(formData);

    const filteredFields = Object.fromEntries(
        Object.entries(fields).filter(([_, value])=> value !=="")
    )

    const Profile = z.object({
        cover: z.string().optional(),
        name: z.string().max(60).optional(),
        surname: z.string().max(60).optional(),
        description: z.string().max(255).optional(),
        city: z.string().max(60).optional(),
        school: z.string().max(60).optional(),
        work: z.string().max(60).optional(),
        website: z.string().max(60).optional(),
    });

    const validatedFields = Profile.safeParse({cover, ...filteredFields});

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {success: false, error:true};
    }

    const { userId } = await auth();

    if (!userId) return {success: false, error:true};

    try {
        await prisma.user.update({
            where: { id: userId },
            data: validatedFields.data,
        });
        return {success: true, error:false};
    } catch (error) {
        console.error(error);
        return {success: false, error:true};
    }
};

export const switchLike = async(postId: number) => {
    const {userId} = await auth();

    if(!userId) throw new Error("인증되지 않은 유저 정보입니다.");
    try {
        const existingLike = await prisma.like.findFirst({
            where:{
                postId,
                userId
            }
        });
        
        let result;
        
        if(existingLike){
            await prisma.like.delete({
                where:{
                    id: existingLike.id
                }            
            });
            result = false; // 좋아요 취소됨
        } else {
            await prisma.like.create({
                data:{
                    postId,
                    userId
                }
            });
            result = true; // 좋아요 추가됨
        }
        
        // 현재 좋아요 수 조회
        const likeCount = await prisma.like.count({
            where: {
                postId
            }
        });
        
        // 상태와 개수 반환
        return { isLiked: result, likeCount };
    } catch (error) {
        console.error(error);
        throw new Error("좋아요 활동 중 에러 발생");
    }
}