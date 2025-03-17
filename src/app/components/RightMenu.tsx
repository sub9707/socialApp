import Ad from "./Ad"
import Birthdays from "./Birthdays"
import FriendsRequests from "./FriendsRequests"

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendsRequests/>
      <Birthdays/>
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu