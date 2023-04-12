
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h2 className="text-3xl">Home page</h2>
    </main>
  )
}
