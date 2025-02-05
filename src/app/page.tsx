import DescriptionContainer from "../components/DescriptionContainer";
import DescriptionBox from "../components/DescriptionBox";
import BulbIcon from "~/components/icons/BulbIcon";
import NoteIcon from "~/components/icons/NoteIcon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./_components/Hero";
import ThinkIcon from "~/components/icons/ThinkIcon";
import SectionHeader from "../components/SectionHeader";
import GuideSection from './_components/GuideSection';
import SmallButton from "~/components/SmallButton";
import Head from "next/head";

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
                    title="How Awarest Helps You Grow"
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
                      content="Self awareness strengthens resilience by helping you recognize and regulate your emotions, making it easier to solve challenges quickly"
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
              <div className="flex flex-col w-full pt-20 bg-gradient-to-b">
                {/* Section Header */}
                <SectionHeader
                  title={
                    <div className="mb-10 text-center">
                      The journey of Self awareness with{' '}
                      <span className="text-primary">Awarest</span>
                    </div>
                  }
                  color="[#171717]"
                />
                <GuideSection />
              </div>
              <div className='pt-20 flex flex-col gap-10 w-full items-center'>
                <SectionHeader
                  title="Download Awarest"
                  content="Let's start your journey with Awarest"
                  color="[#171717]"
                />
                <SmallButton />
              </div>
              {/* review section */}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
