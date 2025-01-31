
export default function Hero() {
  return (
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
  );
}