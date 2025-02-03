import React from 'react';

interface GuideButtonsProps {
  guides: any[]; // 필요한 경우 Guide 데이터 타입을 정의하세요.
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function GuideButtons({
  guides,
  activeIndex,
  onChange,
}: GuideButtonsProps) {
  return (
    <div className="flex justify-center">
      {guides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          className={`px-4 py-2 m-2 rounded-full transition-colors duration-700 ${
            activeIndex === idx
              ? 'bg-primary text-[#FAFAFA] font-semibold'
              : 'bg-background text-foreground font-semibold'
          }`}
        >
          {`Button ${idx + 1}`}
        </button>
      ))}
    </div>
  );
}