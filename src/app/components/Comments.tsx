import Image from "next/image"

const Comments = () => {
  return (
    <div className=''>
        {/* WRITE */}
        <div className='flex items-center gap-4'>
          <Image src="https://images.pexels.com/photos/31080025/pexels-photo-31080025.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" className="w-8 h-8 rounded-full" width={32} height={32}/>
        </div>
        {/* COMMENTS */}
        <div className=''></div>
    </div>
  )
}

export default Comments