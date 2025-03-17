import Image from "next/image"

const Stories = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm scrollbar-hide'>
            <div className='flex gap-8 w-max'>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                {/* Story */}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src="https://images.pexels.com/photos/18166547/pexels-photo-18166547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-20 h-20 rounded-full ring-2 ring-blue-300" height={80} width={80}/>
                    <span className="font-bold">Test</span>
                </div>
            </div>
        </div>
    )
}

export default Stories