import Link from "next/link"

export default function SmallButton() {
  return (
    <Link
      href="https://apple.co/3CD9rlx"
      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] 
      transition-transform active:scale-[0.97] hover:brightness-[0.85]"
      target="_blank"
    >
      <span className="truncate text-[#fafafa]">Download Now</span>
    </Link>
  )
}