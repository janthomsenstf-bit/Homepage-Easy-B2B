import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Mein Bereich – Easy-B2B',
}

export default function MeinBereichLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
