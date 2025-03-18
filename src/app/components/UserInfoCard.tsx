import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({ userId }: { userId: string }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className="text-gray-500">사용자 정보</span>
                <Link href="/" className="text-blue-500 text-sm">전체보기</Link>
            </div>
            {/* BOTTOM */}
            <div className='flex items-center gap-2 text-gray-500'>
                <span className="text-xl text-black font-semibold">Kathryn Marshall</span>
                <span className="text-sm">@Flora</span>
            </div>
            <p>
                In est cillum nisi culpa eiusmod laborum consectetur dolor in culpa.
                Ad ipsum elit reprehenderit cillum reprehenderit dolore sunt do labore Lorem laboris sit.
                Cillum excepteur ad deserunt sit eiusmod enim officia id minim esse officia nostrud.
            </p>
            <div className='flex items-center gap-2'>
                <Image src="/map.png" alt="map" width={16} height={16} className="" />
                <span><b>Lipinzek</b>에 거주</span>
            </div>
            <div className='flex items-center gap-2'>
                <Image src="/school.png" alt="school" width={16} height={16} className="" />
                <span><b>Pojelpoc 고등학교</b> 졸업</span>
            </div>
            <div className='flex items-center gap-2'>
                <Image src="/work.png" alt="work" width={16} height={16} className="" />
                <span><b>Edeupokez</b>에서 근무 중</span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <Image src="/link.png" alt="link" width={16} height={16} className="" />
                    <Link href={'/'} className="text-blue-500 font-medium">mydev.com</Link>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src="/date.png" alt="link" width={16} height={16} className="" />
                    <span>2025년 3월에 가입</span>
                </div>
            </div>
            <button className="bg-blue-500 text-white text-sm rounded-md p-2 cursor-pointer">팔로우</button>
            <span className="text-red-400 self-end text-xs cursor-pointer">이 사용자 차단</span>
        </div>
    )
}

export default UserInfoCard