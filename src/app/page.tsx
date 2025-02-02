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

export default function Home() {
  return (
    <>
      {/* TailwindCSS를 사용한 Body 부분 */}
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
              <section className="flex flex-col gap-10 px-4 py-10 @container max-w-[1080px] min-h-dvh">
                <Hero />
                <div className="flex flex-col gap-10">
                  <SectionHeader
                    title="Unlock your potential with Coura"
                  />
                  {/* 고객이 얻을 수 있는 가치 */}
                  <DescriptionContainer p={0}>
                    <DescriptionBox
                      title="Self awareness"
                      content="Gain deeper self-awareness and unlock your personal growth."
                      icon={<ThinkIcon />}
                      />
                    <DescriptionBox
                      title="brighter future"
                      content="Your future self will thank you—develop a strong way of thinking and core values to create a brighter tomorrow."
                      icon={<BulbIcon />}
                      />
                    <DescriptionBox
                      title="Thought Journal(Diary)"
                      content="A unique journal filled with your own thoughts and insights."
                      icon={<NoteIcon />}
                      />
                  </DescriptionContainer>
                </div>
              </section>
              {/* 그라데이션bg */}
              <div className="hihi flex flex-col w-full px-4 pt-20 bg-[#E5EFED]">
                <SectionHeader
                  title="The journey of self-awareness with Coura"//여기서 game이라고 언질한번 하기
                />
                <AppGuide
                  title="Daily questions"
                  content="Every day, get three thought-provoking questions designed to enhance your self-awareness. Powered by AI, these questions are tailored and randomly selected just for you—making personal growth feel natural and engaging."
                  image="/images/coura-daily-questions.png"
                  alt="Daily questions screen in the Coura app helping users gain self-awareness"
                >
                </AppGuide>
                <AppGuide
                  title="Response"
                  content="Each main question comes with 2 to 5 carefully selected sub-questions, powered by AI. By answering these, you’ll naturally gain deeper insights into the main question—enhancing your self-awareness and personal growth."
                  image="/images/coura-response.png"
                  alt="Response screen in the Coura app where users gain self-awareness"
                />
                <AppGuide
                  title="Dairy"
                  content="Your answers are saved and can be edited anytime. Revisit them later to reflect, refine your thoughts, and track your personal growth. This is more than just a journal—it’s your own self-awareness diary."
                  image="/images/coura-dairy.png"
                  alt="Diary recording screen in the Coura app where users reflect and gain self-awareness"
                />
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

// [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/server-development/1.pack.gz_' -> '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/server-development/1.pack.gz'
// <w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/client-development/2.pack.gz_' -> '/Users/junhyeong/Documents/Coura/coura_web/.next/cache/webpack/client-development/2.pack.gz'