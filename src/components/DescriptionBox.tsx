import { ReactNode } from "react";

interface DescriptionBoxProps {
  title?: string;
  content?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const DescriptionBox = ({
  title,
  content,
  icon,
}: DescriptionBoxProps) => {
  return (
    <div className="min-h-[140px] flex flex-1 gap-4 rounded-lg border border-primary bg-background p-4 flex-col">
      <div className="text-foreground">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-base font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#4f9688] text-sm font-normal leading-normal">
          {content}
        </p>
      </div>
  </div>
  );
}

export default DescriptionBox;