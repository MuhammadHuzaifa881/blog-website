import Link from 'next/link'
import React from 'react'

 const HeaderTop = () => {
  return (
    <>
     <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                BlogHub
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Blog
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Products
              </Link>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderTop