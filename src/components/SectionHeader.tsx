import React from "react";

/* Section.tsx (예시) */
interface SectionProps {
  title?: string | React.ReactNode;
  color?: string;
  content?: string;
}

export default function SectionHeader({
  title,
  color="foreground",
  content,
}: SectionProps) {
  const defaultClass= `text-${color} tracking-light text-[28px] font-bold leading-tight`
  const pDefaultClass=`text-${color} text-base font-normal leading-normal max-w-[720px]`
  return (
    <div className="flex w-full flex-col items-center gap-4 @container [container-type:inline-size]">
      <h1
        className={defaultClass}
      >
        {title}
      </h1>
      <p className="text-foreground text-[18px] text-base font-normal leading-normal max-w-[720px]">
        {content}
      </p>
    </div>
  );
}
