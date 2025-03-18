import Image from "next/image"

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
            {/* TOP */}
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span>스폰서 광고</span>
                <Image src="/dots.png" alt="" width={16} height={16} />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/30970419/pexels-photo-30970419.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className="rounded-lg object-cover" />
                </div>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/30970419/pexels-photo-30970419.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={16} height={16} className="rounded-full w-6 h-6 object-cover"/>
                    <span className="text-blue-500 font-semibold">1015 Mewzi Manor</span>
                </div>
                <p className={`${size === "sm" ? "text-xs":"text-sm"}`}>
                    Enim duis id do ad. 
                    Aliqua anim cillum excepteur eiusmod esse aute ullamco sit deserunt. 
                    Duis et minim officia proident ea exercitation. 
                    Et in voluptate eiusmod sint nulla. 
                    Ea nostrud amet eu nulla dolore et.
                    Mollit ad qui elit aute dolore magna non amet.
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">바로가기 이동</button>
            </div>
        </div>
    )
}

export default Ad