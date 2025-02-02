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
    <div className="flex w-full flex-col items-center gap-4 @container [container-type:inline-size]">
      <h1
        className="
          text-[foreground]
          tracking-light
          text-[28px]
          font-bold
          leading-tight
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
