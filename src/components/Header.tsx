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
              src="/images/coura-logo.png"
              alt="Coura Logo"
              width={40}
              height={40}
            />
          </div>
          <h2 className="text-primary text-lg font-bold leading-tight tracking-[-0.022em]">
            Coura
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
        <SmallButton />
      </div>
  </header>
  );
}