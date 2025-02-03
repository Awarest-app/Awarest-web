
import Image from 'next/image';

interface AppGuideProps {
  title?: string;
  content?: string;
  image: string;
  alt: string;
  children?: React.ReactNode;
}

export default function AppGuide({
  title,
  content,
  image,
  alt,
  children,
}: AppGuideProps) {
  return (
    <section className="flex flex-col items-center w-full gap-20 px-6 @container">
      {children}
    <div className="flex w-full max-w-[880px] min-[701px]:justify-between flex-row gap-10 max-[440px]:gap-1 max-[740px]:flex-col max-[740px]:items-center">
      <div className="flex flex-col max-w-[350px] items-center gap-4 min-[701px]:justify-center max-[740px]:w-full">
        <h2
          className="
            text-[#171717]
            tracking-light
            text-[28px]
            font-bold
            leading-tight"
        >
          {title}
        </h2>
        <p className="
        text-[#171717]
          text-base
          text-[20px]
          font-medium
          leading-normal"
        >
          {content}
        </p>
      </div>
      <div className="flex-none max-w-[350px] rounded-xl max-[700px]:w-[350px] ">
        <Image
          src={image}
          alt={alt}
          width={350}
          height={350}
          className="object-contain rounded-xl"
        />
      </div>    
    </div>
  </section>
  );
}