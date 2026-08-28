import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'

export default function KontoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
