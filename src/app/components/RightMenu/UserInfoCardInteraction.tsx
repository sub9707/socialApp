"use client";

import { switchBlock, switchFollow } from "@/library/actions";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  currentUserId,
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  currentUserId: string;
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const [optimisticState, switchOptimisticState] = useOptimistic(userState, (state, action: "follow" | "block") => {
    if (action === "follow") {
      return {
        ...state,
        following: !state.following,
        followingRequestSent: !state.following && !state.followingRequestSent,
      };
    } else {
      return {
        ...state,
        blocked: !state.blocked,
      };
    }
  });

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState(prev => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {
      console.error(error);
      switchOptimisticState("block"); // 실패 시 원래 상태로 복구
    }
  };

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState(prev => ({
        ...prev,
        following: !prev.following,
        followingRequestSent: !prev.following && !prev.followingRequestSent,
      }));
    } catch (error) {
      console.error(error);
      switchOptimisticState("follow"); // 실패 시 원래 상태로 복구
    }
  };

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2 cursor-pointer">
          {optimisticState.following
            ? "팔로우됨"
            : optimisticState.followingRequestSent
            ? "팔로우 요청됨"
            : "팔로우"}
        </button>
      </form>
      <form action={block} className="self-end">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {optimisticState.blocked ? "이 사용자 차단 해제" : "이 사용자 차단"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
