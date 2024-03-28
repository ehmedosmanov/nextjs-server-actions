import Link from "next/link"

const HomePage = () => {
  return (
    <div className="text-center h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl mb-8 font-bold">Nexst Js Learning</h1>
      <Link href='/about' className='text-2xl'>
        about page
      </Link>
    </div>
  )
}

export default HomePage
