import Image from 'next/image';
import Link from 'next/link';
import SmallButton from './SmallButton';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f3f0] px-10 py-3 mb-2">
      <div className="flex items-center gap-4 text-foreground">
        <Link href="/">
        <button className='flex items-center gap-4 w-max h-max hover:cursor-pointer'>
          <div className="size-10">
            <Image
              src="/images/awarest-logo.png"
              alt="Awarest Logo"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-primary text-lg font-bold leading-tight tracking-[-0.022em]">
            Awarest
          </h2>
        </button>
        </Link>
      </div>
      <div className='flex items-center gap-5'>
        <Link href={'/about'}>
          <button className='text-base font-bold flex items-center gap-4 w-max h-max hover:cursor-pointer'>
            About us
          </button>
        </Link>
        {/* <a href="https://www.producthunt.com/posts/awarest?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-awarest" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=876968&theme=light&t=1739452618550" alt="Awarest - How&#0032;well&#0032;do&#0032;you&#0032;know&#0032;yourself&#0063; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> */}
        <SmallButton />
      </div>
  </header>
  );
}