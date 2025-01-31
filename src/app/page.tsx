import DescriptionContainer from "./_components/DescriptionContainer";
import DescriptionBox from "./_components/DescriptionBox";
import BulbIcon from "~/components/icons/BulbIcon";
import QuestionIcon from "~/components/icons/QuestionIcon";
import LineIcon from "~/components/icons/LineIcon";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      {/* TailwindCSS를 사용한 Body 부분 */}
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8fbfb] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <Header />

          {/* Main Section */}
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* Hero Section */}
              <Hero />

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


              {/* Vision & Values Section */}
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-[#0e1b18] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Our Vision &amp; Values
                  </h1>
                  <p className="text-[#0e1b18] text-base font-normal leading-normal max-w-[720px]">
                    We are committed to providing a platform for self-discovery and personal growth. Our values guide our
                    decisions and interactions with our community.
                  </p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  {/* Card 1 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e6e2] bg-[#f8fbfb] p-4 flex-col">
                    <div className="text-[#0e1b18]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Vision</h2>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">
                        To create a platform that fosters self-discovery and personal growth.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e6e2] bg-[#f8fbfb] p-4 flex-col">
                    <div className="text-[#0e1b18]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Values</h2>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">
                        Authenticity, Empathy, and Continuous Improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Demo Section */}
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-[#0e1b18] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    App Demo
                  </h1>
                  <p className="text-[#0e1b18] text-base font-normal leading-normal max-w-[720px]">
                    Take a sneak peek at our app's intuitive design and seamless user experience.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                  {/* Feature 1 */}
                  <div className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{
                        backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/8a838426-b243-4c6b-a1c6-c643b5d9b645.png')"
                      }}
                    ></div>
                    <div>
                      <p className="text-[#0e1b18] text-base font-medium leading-normal">Feature 1</p>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">Description for Feature 1</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{
                        backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/a9898d16-aed7-4494-86fd-c8a8a53b4d32.png')"
                      }}
                    ></div>
                    <div>
                      <p className="text-[#0e1b18] text-base font-medium leading-normal">Feature 2</p>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">Description for Feature 2</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{
                        backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/6fcb4097-c041-443c-8dcf-fbdf7c419d1f.png')"
                      }}
                    ></div>
                    <div>
                      <p className="text-[#0e1b18] text-base font-medium leading-normal">Feature 3</p>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">Description for Feature 3</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pipeline Section */}
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4">
                  <h1
                    className="text-[#0e1b18] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    In the Pipeline
                  </h1>
                  <p className="text-[#0e1b18] text-base font-normal leading-normal max-w-[720px]">
                    We are constantly evolving and have exciting updates in the pipeline. Stay tuned for more!
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  {/* Card 1 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e6e2] bg-[#f8fbfb] p-4 flex-col">
                    <div className="text-[#0e1b18]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Company Blog</h2>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">
                        Read our blog for insights, tips, and personal stories.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e6e2] bg-[#f8fbfb] p-4 flex-col">
                    <div className="text-[#0e1b18]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Meet the Team</h2>
                      <p className="text-[#4f9688] text-sm font-normal leading-normal">
                        Get to know the faces behind our platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Section */}
        </div>
      </div>
    </>
  );
}
