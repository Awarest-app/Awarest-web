
import AppGuide from './AppGuide';
interface GuideData {
  title: string;
  content: string;
  image: string;
  alt: string;
}

export default function GuideSection() {
    // AppGuide에 들어갈 데이터 배열
    const guides: GuideData[] = [
      {
        title: "Daily questions",
        content:
          "Every day, our recommendation algorithm delivers \
          three personalized questions, carefully selected just for you.",
        image: "/images/coura-daily-questions.png",
        alt: "Daily questions screen in the Coura app helping users gain self-awareness",
      },
      {
        title: "Answer",
        content:
          "Each question comes with 2 to 5 AI-assisted sub-questions, \
          guiding your thoughts and effectively enhancing your self awareness.",
        image: "/images/coura-answer.png",
        alt: "Response screen in the Coura app where users gain self awareness",
      },
      {
        title: "A personal note",
        content:
          "Your answers are saved and can be edited anytime. Revisit them later to reflect, refine your thoughts, and track your personal growth. This is more than just a journal—it’s your own self-awareness diary.",
        image: "/images/coura-notes.png",
        alt: "Diary recording screen in the Coura app where users reflect and gain self-awareness",
      },
    ];
  return (
      <>
        <div className="slider-container relative">
          {/* 각 슬라이드를 선택하기 위한 라디오 버튼들 */}
          {guides.map((_, idx) => (
            <input
              key={`input-${idx}`}
              type="radio"
              name="slider"
              id={`slide-${idx}`}
              className="hidden"
              defaultChecked={idx === 0}  // 첫 슬라이드를 기본 선택
            />
          ))}

          {/* 슬라이드 컨테이너 */}
          <div className="slides flex transition-transform duration-700 ease-in-out">
            {guides.map((guide, idx) => (
              <div key={idx} className="slide min-w-full">
                <AppGuide {...guide} />
              </div>
            ))}
          </div>

          {/* 네비게이션 버튼 (라벨) */}
          <div className="navigation flex justify-center">
            {guides.map((_, idx) => (
              <label
                key={idx}
                htmlFor={`slide-${idx}`}
                className="mt-20 max-[740px]:mt-4 max-[740px]:mb-[80px] w-[110px] max-h-[40px] px-1 py-2 m-2 rounded-full
                cursor-pointer transition-colors duration-700 text-center
                bg-background font-semibold border border-primary
                mb-[200px]"
              >
                {idx === 0 && "Questions"}
                {idx === 1 && "Answers"}
                {idx === 2 && "Diary"}
              </label>
            ))}
          </div>
        </div>
        {/* <div className="overflow-hidden relative min-h-[70vh]">
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
        </div> */}
      </>
  )
}