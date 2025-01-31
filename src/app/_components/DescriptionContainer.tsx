
interface DescriptionContainerProps {
  children?: React.ReactNode;
}

export default function DescriptionContainer({
  children,
}: DescriptionContainerProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {children}
    </div>
  )
}