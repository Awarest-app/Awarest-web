import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f3f0] px-10 py-3 mb-2">
      <div className="flex items-center gap-4 text-foreground">
        <Link href="/">
        <button className='flex items-center gap-4 w-max h-max hover:cursor-pointer'>
          <div className="size-10">
            <Image
              src="/images/logo.png"
              alt="Coura Logo"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.022em]">
            Coura
          </h2>
        </button>
        </Link>
      </div>
      <button
        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] 
        transition-transform active:scale-[0.97] hover:brightness-[0.85]"
      >
        <span className="truncate text-[#fafafa]">Download Now</span>
      </button>
  </header>
  );
}