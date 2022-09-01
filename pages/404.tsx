import Link from 'next/link'

export default function FourOhFour() {
  return (
  <div className="flex my-64 h-100vh w-full items-center justify-around">
    <div className="text-center">
        <h1 className="font-bold text-4xl">404 | Lost in space</h1>
        <Link href="/">
            <a>
                Go back home
            </a>
        </Link>
    </div>
  </div>
  )
}