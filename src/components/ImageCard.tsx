import Image from 'next/image';

interface ImageCardProps {
  img?: string;
  title?: string;
  description?: string;
}

export default function ImageCard({
  img,
  title,
  description,
}: ImageCardProps) {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div className="relative w-full max-w-[350px] aspect-video rounded-xl">
        <Image
          src={'/images/' + img}
          alt={title || 'Feature image'}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div>
        <p className="text-foreground text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#4f9688] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
