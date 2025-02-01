export default function Hero() {
  return (
    // 부모 요소에 container-type을 설정합니다.
    <div className="[container-type:inline-size]">
      <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8">
        {/* 컨테이너 너비가 549px 이하일 때 flex-col 적용 */}
        <div className="flex mb-4 [container(max-width:549px)]:flex-col">
          <div className="flex flex-1 flex-col gap-4 text-left">
            <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Coura - make self-discovery easy
            </h1>
            <h2 className="text-foreground text-xl font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Start your journey to self-discovery with Coura. Answer daily questions, get personalized insights, and track your progress.
            </h2>
          </div>
          <div
            className="flex-1 bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full mb-2"
            style={{
              backgroundImage:
                "url('https://cdn.usegalileo.ai/sdxl10/a8309079-94ac-4e60-841f-f587c33af1ab.png')"
            }}
          />
        </div>
        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
          <div className="flex @[480px]:min-w-[400px] justify-center items-center p-4">
            <button
              className="flex w-full min-w-[84px] min-h-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform active:scale-[0.99] hover:brightness-[0.85]"
            >
              <span className="text-[16px] truncate text-[#FAFAFA]">
                Download Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
