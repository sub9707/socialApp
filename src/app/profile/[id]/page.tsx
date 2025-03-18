import Feed from "@/app/components/Feed"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import Image from "next/image"

const Profile = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className='hidden xl:block w-[20%]'><LeftMenu type="profile"/></div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image src="https://images.pexels.com/photos/31050112/pexels-photo-31050112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill alt=""className="rounded-md object-cover"/>
              <Image src="https://images.pexels.com/photos/27372369/pexels-photo-27372369.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  width={128} height={128} className="w-32 h-32 rounded-full object-cover absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"/>
            </div>
            <h1 className="mt-20 pb-4 text-2xl font-bold">Trevor Johnson</h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              <div className='flex flex-col items-center'>
                <span className="font-semibold">123</span>
                <span className="text-sm">게시글</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className="font-semibold">1.7K</span>
                <span className="text-sm">팔로워</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className="font-semibold">123</span>
                <span className="text-sm">팔로잉</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'><RightMenu userId="test" /></div>
    </div>
  )
}

export default Profile