import Image from "next/image"
import Link from "next/link"

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
                  {/* TOP */}
                  <div className='flex justify-between items-center font-medium'>
                <span className="text-gray-500">생일인 사람</span>
            </div>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/31120801/pexels-photo-31120801.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-semibold">Addie Townsend</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <button className="flex gap-2 items-center justify-center bg-blue-500 text-white text-xs px-2 py-1 rounded-md"><Image src="/celebrate.png" alt="celebrate" width={16} height={16}/>축하해요!</button>
                </div>
            </div>
    </div>
  )
}

export default Birthdays