import Image from "next/image";
import Apple from "~/components/icons/AppleDownload"
import Link from "next/link";

export default function Hero() {
  return (
    <div className="@container">
      <div className="flex flex-col gap-6 px-4 py-10  [@media (min-width:480px)]:gap-8">
        <div className="flex gap-10 max-[700px]:flex-col max-[700px]:gap-10 h-full">
          <div className="flex flex-1 flex-col gap-4 text-left min-h-[400px] max-[700px]:items-center">
            <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] [@media (min-width:480px)]:text-5xl [@media (min-width:480px)]:font-black [@media (min-width:480px)]:leading-tight [@media (min-width:480px)]:tracking-[-0.033em]">
              Daily Questions for Self Awareness,
                Stronger Habits,
              and a Resilient Mindset
            </h1>
            <h2 className="text-foreground text-xl font-normal leading-normal [@media (min-width:480px)]:text-base [@media (min-width:480px)]:font-normal [@media (min-width:480px)]:leading-normal">
            Answer fun, AI-driven questions daily, track your growth in a unique self reflection diary, and build resilience through gamification.
            </h2>
            <div className="flex mt-auto px-4 w-full items-center justify-center">
              <Link
                href="https://apps.apple.com/us/app/awarest-daily-self-awareness/id6741562490?ign-itscg=30200&ign-itsct=apps_box_link&mttnsubad=6741562490"
                className="max-[700px]:w-48 flex w-full min-w-[84px] min-h-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 [@media (min-width:480px)]:h-12 [@media (min-width:480px)]:px-5 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] [@media (min-width:480px)]:text-base [@media (min-width:480px)]:font-bold [@media (min-width:480px)]:leading-normal [@media (min-width:480px)]:tracking-[0.015em] transition-transform active:scale-[0.99] hover:brightness-[0.85]"
                target="_blank"
              >
                <Apple />
              </Link>
            </div>
          </div>
          <div className="relative flex-1 rounded-xl max-[700px]:min-h-[350px] [@media (min-width:480px)]:min-w-[400px] [@media (min-width:864px)]:w-full">
            <Image
              src="/images/awarest-app-mockup.png"
              alt="Awarest app mockup image showing the app interface"
              fill
              className="object-fill rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
