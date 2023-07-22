import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <div>This is home page
      <Link href="/pages/login">
        <button>Go to login</button></Link>
    </div>
  )
}

export default Home