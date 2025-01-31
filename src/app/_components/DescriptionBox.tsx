import { ReactNode } from "react";

interface DescriptionBoxProps {
  title?: string;
  content?: string;
  icon?: ReactNode;
}

const DescriptionBox = ({
  title,
  content,
  icon,
}: DescriptionBoxProps) => {
  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e6e2] bg-[#f8fbfb] p-4 flex-col">
    <div className="text-[#0e1b18]">
      {icon}
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="text-[#0e1b18] text-base font-bold leading-tight">
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