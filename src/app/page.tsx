import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Galileo Design</title>
        <meta name="description" content="Mindful - Unlock Your True Self Through Simple Daily Questions" />
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

        {/* Google Fonts - onload 속성은 제거하고 기본 rel="stylesheet"로 사용 */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;500;700;800"
        />
      </Head>

      {/* TailwindCSS를 사용한 Body 부분 */}
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8fbfb] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f3f0] px-10 py-3">
            <div className="flex items-center gap-4 text-[#0e1b18]">
              <div className="size-4">
                {/* 로고 SVG */}
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_543)">
                    <path
                      d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_543">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#0e1b18] text-lg font-bold leading-tight tracking-[-0.015em]">Mindful</h2>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0D9488] text-[#0e1b18] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate text-[#FAFAFA]">Download Now</span>
            </button>
          </header>

          {/* Main Section */}
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* Hero Section */}
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    style={{
                      backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/a8309079-94ac-4e60-841f-f587c33af1ab.png')"
                    }}
                  ></div>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <h1
                        className="text-[#0e1b18] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                      >
                        Unlock Your True Self Through Simple Daily Questions
                      </h1>
                      <h2 className="text-[#0e1b18] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Start your self-discovery journey today with personalized insights
                      </h2>
                    </div>
                    <button
                      className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0D9488] text-[#0e1b18] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate text-[#FAFAFA]">Download Now</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 3-Column Feature Section */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
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
                      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Daily Questions</h2>
                    <p className="text-[#4f9688] text-sm font-normal leading-normal">
                      Answer a daily question to reflect on your day
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
                      <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Personalized Insights</h2>
                    <p className="text-[#4f9688] text-sm font-normal leading-normal">
                      Get personalized insights based on your responses
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e6e2] bg-[#f8fbfb] p-4 flex-col">
                  <div className="text-[#0e1b18]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0e1b18] text-base font-bold leading-tight">Progress Tracking</h2>
                    <p className="text-[#4f9688] text-sm font-normal leading-normal">
                      Track your journey and see how you've grown
                    </p>
                  </div>
                </div>
              </div>

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
