import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LEFT */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href={'/'} className="font-bold text-xl">NextBook</Link>
      </div>
      {/* CENTER */}
      <div className='hidden md:flex w-[50%] text-sm'>
        {/* LINKS */}
        <div className='flex gap-6 text-gray-600 font-bold'>
          <Link href={'/'} className="flex gap-2 items-center">
            <Image src={'/home.png'} alt={'homeIcon'} width={20} height={20} className="w-5 h-5"/>
            <span>홈페이지</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <Image src={'/group.png'} alt={'groupIcon'} width={20} height={20} className="w-5 h-5"/>
            <span>친한사람들</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <Image src={'/more.png'} alt={'storyIcon'} width={20} height={20} className="w-5 h-5" />
            <span>스토리</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar