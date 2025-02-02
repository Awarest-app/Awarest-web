import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '~/components/SectionHeader';
import DescriptionContainer from '~/components/DescriptionContainer';
import DescriptionBox from '~/components/DescriptionBox';
import VisionIcon from '~/components/icons/VisionIcon';
import HeartIcon from '~/components/icons/HeartIcon';

export default function Home() {
  return (
    <>
      <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f3f0] px-10 py-3">
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
          <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.022em]">
            Coura
          </h2>
        </button>
        </Link>
      </div>
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] 
        transition-transform active:scale-[0.97] hover:brightness-[0.85]"
      >
        <span className="truncate text-[#fafafa]">Download Now</span>
      </button>
  </header>
        <section className="flex flex-col gap-10 px-4 py-10 @container">
          <SectionHeader
            title="Our Vision &amp; Values"
            content="We are committed to providing a platform for self-discovery and personal growth. Our values guide our decisions and interactions with our community."
          />
          <DescriptionContainer p={0}>
            <DescriptionBox
              title="Vision"
              content="To create a platform that fosters self-discovery and personal growth."
              icon={<VisionIcon />}
            />
            <DescriptionBox
              title="Values"
              content="Authenticity, Empathy, and Continuous Improvement."
              icon={<HeartIcon />}
            />
          </DescriptionContainer>
        </section>
      </div>
    </>
  );
}
