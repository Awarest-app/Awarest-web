/* Section.tsx (예시) */
interface SectionProps {
  title?: string;
  content?: string;
}

export default function SectionHeader({
  title,
  content,
}: SectionProps) {
  return (
    // 공백 없이 [container-type:inline-size] 로 수정
    // todo 나중에 미디어쿼리 
    <div className="flex flex-col gap-4 @container [container-type:inline-size]">
      <h1
        className="
          text-[foreground]
          tracking-light
          text-[32px]
          font-bold
          leading-tight
          @[480px]:text-4xl
          @[480px]:leading-tight
          @[480px]:tracking-[-0.033em]
          max-w-[720px]
        "
      >
        {title}
      </h1>
      <p className="text-foreground text-base font-normal leading-normal max-w-[720px]">
        {content}
      </p>
    </div>
  );
}
