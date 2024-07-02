import { About } from './About'
import { Contact } from './Contact'
import { Header } from './Header'
import { Portfolio } from './Portfolio'
import { Services } from './Services'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  )
}
