import Image from "next/image"
import Link from "next/link"

const FriendsRequests = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className="text-gray-500">친구 요청</span>
                <Link href="/" className="text-blue-500 text-sm">전체보기</Link>
            </div>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-semibold">Addie Townsend</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src="/accept.png" alt="accept" width={20} height={20} className="w-5 h-5 cursor-pointer" />
                    <Image src="/decline.png" alt="reject" width={20} height={20} className="w-5 h-5 cursor-pointer grayscale" />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-semibold">Addie Townsend</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src="/accept.png" alt="accept" width={20} height={20} className="w-5 h-5 cursor-pointer" />
                    <Image src="/decline.png" alt="reject" width={20} height={20} className="w-5 h-5 cursor-pointer grayscale" />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-semibold">Addie Townsend</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src="/accept.png" alt="accept" width={20} height={20} className="w-5 h-5 cursor-pointer" />
                    <Image src="/decline.png" alt="reject" width={20} height={20} className="w-5 h-5 cursor-pointer grayscale" />
                </div>
            </div>
        </div>
    )
}

export default FriendsRequests