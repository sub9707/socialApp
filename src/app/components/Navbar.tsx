import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LEFT */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href={'/'} className="font-bold text-xl">NextBook</Link>
      </div>
      {/* CENTER */}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        {/* LINKS */}
        <div className='flex gap-6 text-gray-600 font-bold'>
          <Link href={'/'} className="flex gap-2 items-center">
            <Image src={'/home.png'} alt={'homeIcon'} width={20} height={20} className="w-5 h-5" />
            <span>홈페이지</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <Image src={'/group.png'} alt={'groupIcon'} width={20} height={20} className="w-5 h-5" />
            <span>친한사람들</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <Image src={'/more.png'} alt={'storyIcon'} width={20} height={20} className="w-5 h-5" />
            <span>스토리</span>
          </Link>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder="사용자 검색..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt='search' width={14} height={14} />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='gap-6 hidden md:flex'>
              <div className='cursor-pointer'>
                <Image src="/group.png" width={24} height={24} alt="friends" />
              </div>
              <div className='cursor-pointer'>
                <Image src="/chat.png" width={24} height={24} alt="chat" />
              </div>
              <div className='cursor-pointer'>
                <Image src="/notification.png" width={24} height={24} alt="alert" />
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-2 text-sm'>
              <Image src="/group.png" width={20} height={20} alt="" />
              <Link href={'/sign-in'}>로그인/회원가입</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar