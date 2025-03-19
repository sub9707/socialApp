import { User } from "@prisma/client"
import Ad from "../Ad"
import Birthdays from "./Birthdays"
import FriendsRequests from "./FriendsRequests"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"
import { Suspense } from "react"

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className='flex flex-col gap-6'>
      {
        user ?
          <>
            <Suspense fallback="loading...">
              <UserInfoCard user={user} />
            </Suspense>
            <Suspense fallback="loading...">
              <UserMediaCard user={user} />
            </Suspense>
          </>
          :
          null
      }
      <FriendsRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}

export default RightMenu