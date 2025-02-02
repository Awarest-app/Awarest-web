import DescriptionContainer from "../components/DescriptionContainer";
import DescriptionBox from "../components/DescriptionBox";
import BulbIcon from "~/components/icons/BulbIcon";
import NoteIcon from "~/components/icons/NoteIcon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./_components/Hero";
import ThinkIcon from "~/components/icons/ThinkIcon";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* TailwindCSS를 사용한 Body 부분 */}
      <Header />
      <div
        className="relative flex size-full min-h-screen flex-col bg-background group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}

          {/* Main Section */}
          <main className="flex flex-1 justify-center px-6 py-4">
            <div className="layout-content-container flex flex-col max-w-[1080px] flex-1">
              {/* Hero Section */}
              <section className="flex flex-col gap-10 px-4 py-10 @container min-[700px]:h-dvh">
                <Hero />
                <div className="flex flex-col gap-10">
                  <SectionHeader
                    title="Unlock your potential with Coura"
                  />
                  {/* 고객이 얻을 수 있는 가치 */}
                  <DescriptionContainer p={0}>
                    <DescriptionBox
                      title="Self awareness"
                      content="현재의 나자신을 알고싶고, 성장시킬수있음"
                      icon={<ThinkIcon />}
                      />
                    <DescriptionBox
                      title="brighter future"
                      content="미래의 내가 좋아져있을거고 way of thinking, corevalues를 얻어서 미래가 밝아진다 이런느낌"
                      icon={<BulbIcon />}
                      />
                    <DescriptionBox
                      title="Thought Journal(Diary)"
                      content="생각의 기록으로 일기처럼 쓸수있다"
                      icon={<NoteIcon />}
                      />
                  </DescriptionContainer>
                </div>
              </section>

              <section className="flex flex-col gap-10 px-4 py-10 @container h-dvh bg-sky-200">
                <SectionHeader
                  title="The journey of self-awareness with Coura"//여기서 game이라고 언질한번 하기
                />
                <div className="flex h-full flex-row gap-10 max-[700px]:flex-col max-[700px]:items-center">
                  <div className="flex-1 h-full">
                    asdadsadads
                  </div>
                  <div className="flex-1 max-w-[350px] rounded-xl max-[700px]:min-h-[350px] [@media (min-width:864px)]:w-full">
                    <Image
                      src="/images/home.png"
                      alt="asd"
                      width={350}
                      height={350}
                      className="object-contain rounded-xl"
                    />
                  </div>    
                </div>
              </section>
              {/* review section */}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
