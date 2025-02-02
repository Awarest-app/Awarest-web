interface DescriptionContainerProps {
  children?: React.ReactNode;
  p?: number;
}

export default function DescriptionContainer({
  children,
  p = 4,
}: DescriptionContainerProps) {
  const defaultClass = `grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] max-[545px]:grid-cols-1 gap-5 p-${p}`;
  return (
    <div className={defaultClass}>
      {children}
    </div>
  );
}
