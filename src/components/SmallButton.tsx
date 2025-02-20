import Link from "next/link"

export default function SmallButton() {
  return (
    <Link
      href="https://apps.apple.com/us/app/awarest-daily-self-awareness/id6741562490?ign-itscg=30200&ign-itsct=apps_box_link&mttnsubad=6741562490"
      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-foreground text-sm font-bold leading-normal tracking-[0.015em] 
      transition-transform active:scale-[0.97] hover:brightness-[0.85]"
      target="_blank"
    >
      <span className="truncate text-[#fafafa]">Download Now</span>
    </Link>
  )
}