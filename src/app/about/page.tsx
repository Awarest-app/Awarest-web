import Header from '~/components/Header';
import SectionHeader from '~/components/SectionHeader';
import Footer from '~/components/Footer';
import DescriptionContainer from '~/components/DescriptionContainer';
import DescriptionBox from '~/components/DescriptionBox';
import ThinkIcon from '~/components/icons/ThinkIcon';
import BulbIcon from '~/components/icons/BulbIcon';
import NoteIcon from '~/components/icons/NoteIcon';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Header />
      <div
        className="relative flex size-full items-center min-h-screen flex-col bg-background group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <main className="flex flex-col flex-1 py-4 px-6 max-w-[800px] w-full items-center">
          <section className="flex flex-col gap-10 px-4 py-10 w-full">
            <SectionHeader
              title="Problem"
              content="
                  People have an innate desire to understand themselves.
                  Yet, no personality test can truly capture who they are.
                  That's why many turn to meditation to observe their thoughts or use screen lock apps
                  to limit phone usage and create time for self-reflection.
                  However, meditation takes years to master, and screen locks only address the surface of the problem
                "
            />
          </section>
          <section className="flex flex-col gap-10 px-4 py-10 w-full">
            <SectionHeader
              title="Solution"
              content="We provide three daily questions, each with structured sub-questions designed to enhance self-awareness,
              strengthen resilience, and help users gain a deeper understanding of themselves.
                Through gamification, we make the process engaging and enjoyable.
                By keeping a record, users can track their current state and
                see how much they have grown over time.
              "
            />
          </section>
          <section className="flex flex-col gap-10 px-4 py-10 @container max-w-[1080px]">
            <div className="flex flex-col gap-10">
              <SectionHeader
                title="Value Proposition"
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
          <section className="flex flex-col gap-10 px-4 py-10 w-full">
            <SectionHeader
              title={
                <div className="flex flex-col mb-20 text-center gap-4">
                  Vision<br/>
                  <div className='text-[24px] font-medium text-primary'>Empowering everyone to grow and truly understand themselves.</div>
                </div>
              }
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
