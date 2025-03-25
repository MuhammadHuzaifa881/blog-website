import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Image1 from '../../public/page1.jpeg'
export default function Home() {
  // Sample data - replace with your actual data
  const featuredPosts = [
    {
      id: 1,
      title: "10 Tips for Better Blog Writing",
      excerpt:
        "Learn how to improve your writing skills and engage your readers with these proven techniques.",
      category: "Writing",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: Image1,
    },
    {
      id: 2,
      title: "The Future of Content Creation",
      excerpt:
        "Discover how AI is changing the landscape of content creation and what it means for bloggers.",
      category: "Technology",
      date: "June 2, 2023",
      readTime: "8 min read",
      image:Image1,
    },
  ];

  const popularPosts = [
    {
      id: 3,
      title: "SEO Strategies for 2023",
      excerpt:
        "Stay ahead of the competition with these latest SEO techniques.",
      category: "Marketing",
      date: "April 28, 2023",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Building a Personal Brand Online",
      excerpt: "How to establish yourself as an authority in your niche.",
      category: "Business",
      date: "May 5, 2023",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Monetizing Your Blog",
      excerpt: "Multiple income streams every blogger should know about.",
      category: "Finance",
      date: "May 20, 2023",
      readTime: "7 min read",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Blogging Masterclass",
      price: "$99",
      description: "Complete guide to professional blogging",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Content Planner",
      price: "$29",
      description: "Organize your content strategy",
      image: "/images/product2.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>BlogHub - Your Source for Great Content</title>
          <meta
            name="description"
            content="Discover amazing blog posts and resources"
          />
        </Head>
        {/* Hero Section */}
        <div className="bg-indigo-700 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Discover Amazing Content
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Explore our collection of insightful blog posts and premium
              products to boost your online presence.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Link
                href="/blog"
                className="bg-white text-indigo-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
              >
                Browse Blogs
              </Link>
              <Link
                href="/products"
                className="bg-indigo-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-600"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Posts
            </h2>
            <p>{"Handpicked content you don't want to miss"}</p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0 h-48 overflow-hidden">
                  <Image
                    className="h-full w-full object-cover"
                    src={post.image}
                    width={500}  // Required
                    height={300} // Required
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {post.category}
                    </p>
                    <Link href={`/blog/${post.id}`} className="block mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {post.date} · {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>

        {/* Popular Posts */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Popular This Week
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                What others are reading right now
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {popularPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {post.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="block mt-4">
                      <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {post.excerpt}
                      </p>
                    </Link>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-sm text-gray-500">{post.date}</div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Premium resources to help you succeed
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <Image
                      width={500}  // Required
                      height={300} // Required
                      className="h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                      Digital Product
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:text-indigo-600"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-2 text-gray-500">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <Link
                        href={`/products/${product.id}`}
                        className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Browse All Products
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-indigo-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Stay updated
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                Get the latest posts and products delivered to your inbox.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-indigo-200">
                We care about your data. Read our{" "}
                <Link href="#" className="text-white font-medium underline">
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
