import DescriptionContainer from "../components/DescriptionContainer";
import DescriptionBox from "../components/DescriptionBox";
import BulbIcon from "~/components/icons/BulbIcon";
import NoteIcon from "~/components/icons/NoteIcon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./_components/Hero";
import ThinkIcon from "~/components/icons/ThinkIcon";
import SectionHeader from "../components/SectionHeader";
import AppGuide from "./_components/AppGuide";
import GuideSection from './_components/GuideSection';

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="relative flex size-full min-h-screen flex-col bg-background group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col items-center">
          {/* Header */}

          {/* Main Section */}
          <main className="flex flex-col flex-1 justify-center py-4 w-full items-center">
            <div className="layout-content-container flex flex-col flex-1 w-full items-center">
              {/* Hero Section */}
              <section className="flex flex-col gap-10 px-4 py-10 @container max-w-[1080px]">
                <Hero />
                <div className="flex flex-col gap-10">
                  <SectionHeader
                    title="How Coura Helps You Grow"
                  />
                  {/* 고객이 얻을 수 있는 가치 */}
                  <DescriptionContainer p={0}>
                    <DescriptionBox
                      title="Self awareness"
                      content="Structured questions guide you to reflect and discover more about yourself."
                      icon={<ThinkIcon />}
                      />
                    <DescriptionBox
                      title="Resilience"
                      content="Self-awareness strengthens resilience by helping you recognize and regulate your emotions, making it easier to solve challenges quickly"
                      icon={<BulbIcon />}
                      />
                    <DescriptionBox
                      title="Your thought note"
                      content="A personal note designed for your unique thoughts and insights."
                      icon={<NoteIcon />}
                      />
                  </DescriptionContainer>
                </div>
              </section>
              {/* 그라데이션bg */}
              <div className="hihi flex flex-col w-full pt-20 bg-[#E5EFED]">
                {/* Section Header */}
                <SectionHeader
                  title={
                    <div className="mb-10 text-center">
                      The journey of Self awareness with{' '}
                      <span className="text-primary">Coura</span>
                    </div>
                  }
                />
                <GuideSection />
                {/* <div>
                  <div className="overflow-hidden relative min-h-[70vh]">
                    <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                      {guides.map((guide, idx) => (
                        <div key={idx} className="min-w-full">
                          <AppGuide {...guide} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center max-[740px]:pt-10 max-[440px]:pt-0">
                    {guides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-[110px] max-h-[40px] px-1 py-2 m-2 rounded-full transition-colors duration-700 ${
                          activeIndex === idx
                            ? 'bg-primary text-[#FAFAFA] font-semibold'
                            : 'bg-background text-foreground font-semibold'
                        }`}
                      >
                        {idx == 0 && ("Questions")}
                        {idx == 1 && ("Answers")}
                        {idx == 2 && ("Diary")}
                      </button>
                    ))}
                  </div>
                </div> */}
              </div>
              <div className='flex flex-col w-full items-center bg-sky-200'>
                <SectionHeader
                  title="Download Coura"
                  content='asdads'
                />
                <button
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] 
                  transition-transform active:scale-[0.97] hover:brightness-[0.85]"
                >
                  <span className="truncate text-[#fafafa]">Download Now</span>
                </button>
              </div>
              {/* download 버튼 */}
              {/* review section */}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

// [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/server-development/1.pack.gz_' -> '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/server-development/1.pack.gz'
// <w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/client-development/2.pack.gz_' -> '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/client-development/2.pack.gz'