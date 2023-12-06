import MainNav from "@/components/main-nav"
import Link from "next/link"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}