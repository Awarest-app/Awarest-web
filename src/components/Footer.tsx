import Image from 'next/image';
import Link from 'next/link';
import Insta from '../../public/icons/instagram.svg';
import Youtube from '../../public/icons/youtube.svg';

export default function Footer() {
  return (
    // instagram, email
    <footer className="mt-10 flex items-center whitespace-nowrap border-b border-solid border-b-[#e8f3f0] px-12 py-3">
      <div className="flex items-center gap-4 text-foreground">
        <Link href="/">
          <button className='flex items-center gap-4 w-max h-max hover:cursor-pointer'>
            <div>
              <Image
                src="/images/coura-logo.png"
                alt="Coura Logo"
                width={28}
                height={28}
              />
            </div>
          </button>
        </Link>
        <div className='flex items-center gap-4 text-sm font-normal'>
          
          <Link href={process.env.INSTAGRAM_URL || '404'}
            target="_blank"
          >
            <Image
              src={Insta}
              alt="Instagram logo"
              width={24}
              height={24}
            />
          </Link>
          <Link href={process.env.YOUTUBE_URL || '404'}
            target="_blank"
          >
            <Image
              src={Youtube}
              alt="youtube logo"
              width={26}
              height={26}
            />
          </Link>
          <p>
            E-mail: team@withcoura.com
          </p>
          <button>
            privacy policy
          </button>
          <button>
            terms
          </button>
        </div>
      </div>
  </footer>
  );
}