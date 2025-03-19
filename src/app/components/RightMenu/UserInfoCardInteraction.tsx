"use client"

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
  return (
    <>
      <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2 cursor-pointer">{isFollowing ? "팔로우됨": isFollowingSent ? "팔로우 요청됨":"팔로우"}</button>
      <span className="text-red-400 self-end text-xs cursor-pointer">{isUserBlocked ? "이 사용자 차단 해제" : "이 사용자 차단"}</span>
    </>
  )
}

export default UserInfoCardInteraction