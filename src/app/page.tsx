import DescriptionContainer from "./_components/DescriptionContainer";
import DescriptionBox from "./_components/DescriptionBox";
import BulbIcon from "~/components/icons/BulbIcon";
import QuestionIcon from "~/components/icons/QuestionIcon";
import LineIcon from "~/components/icons/LineIcon";
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import Hero from "./_components/Hero";
import VisionIcon from "~/components/icons/VisionIcon";
import HeartIcon from "~/components/icons/HeartIcon";
import SectionHeader from "../components/SectionHeader";
import ImageCard from "~/components/ImageCard";
export default function Home() {
  return (
    <>
      {/* TailwindCSS를 사용한 Body 부분 */}
      <div
        className="relative flex size-full min-h-screen flex-col bg-background group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <Header />

          {/* Main Section */}
          <main className="flex flex-1 justify-center p-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              {/* Hero Section */}
              <section className="@container flex flex-col gap-10">
                <Hero />
                <SectionHeader
                  title="Features"
                />
                {/* 3-Column Feature Section */}
                <DescriptionContainer>
                  <DescriptionBox
                    title="Daily Questionsasd"
                    content="hello"
                    icon={<QuestionIcon />}
                  />
                  <DescriptionBox
                    title="Personalized Insights"
                    content="Get personalized insights based on your responses"
                    icon={<BulbIcon />}
                  />
                  <DescriptionBox
                    title="Progress Tracking"
                    content="Track your journey and see how you've grown"
                    icon={<LineIcon />}
                  />
                </DescriptionContainer>
              </section>


              {/* Vision & Values Section */}
              {/* <section className="flex flex-col gap-10 px-4 py-10 @container">
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
              </section> */}

              {/* App Demo Section */}
              <section className="flex flex-col gap-10 px-4 py-10 @container">
                <SectionHeader
                  title="App Demo"
                  content="Take a sneak peek at our app's intuitive design and seamless user experience."
                />
                <DescriptionContainer p={0}>
                  {/* Feature 1 */}
                  <ImageCard
                    title="Feature 1"
                    description="Description for Feature 1"
                    img="capi2.jpeg"
                  />
                  <ImageCard
                    title="Feature 1"
                    description="Description for Feature 1"
                    img="capi2.jpeg"
                  />
                  <ImageCard
                    title="Feature 1"
                    description="Description for Feature 1"
                    img="capi2.jpeg"
                  />
                </DescriptionContainer>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
