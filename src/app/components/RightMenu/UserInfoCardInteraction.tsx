"use client";

import { switchBlock, switchFollow } from "@/library/actions";
import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
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
        followingRequestSent: !state.followingRequestSent,
        following: state.followingRequestSent ? false : state.following, // 팔로우 요청 취소 시 팔로우 상태 초기화
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
        followingRequestSent: !prev.followingRequestSent,
        following: prev.followingRequestSent ? false : prev.following, // 팔로우 요청 취소 시 팔로우 상태 초기화
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
          {optimisticState.followingRequestSent
            ? "팔로우 요청됨"
            : optimisticState.following
            ? "팔로우됨"
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
