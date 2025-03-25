// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Blog.module.css'

 const Blog=()=> {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js and how to create your first application.",
      date: "May 15, 2023",
      category: "Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      excerpt: "Explore modern CSS features that will elevate your designs.",
      date: "June 2, 2023",
      category: "Design",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "The Future of React",
      excerpt: "What's coming in React 19 and how to prepare for it.",
      date: "June 10, 2023",
      category: "Development",
      readTime: "6 min read",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | My Awesome Blog</title>
        <meta name="description" content="Browse all our blog posts" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Our Blog</h1>
        <p className={styles.subtitle}>Thoughts, stories and ideas</p>
      </header>

      <div className={styles.filterBar}>
        <button className={`${styles.filterButton} ${styles.active}`}>All</button>
        <button className={styles.filterButton}>Development</button>
        <button className={styles.filterButton}>Design</button>
        <button className={styles.filterButton}>Business</button>
      </div>

      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.postCategory}>{post.category}</span>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.postFooter}>
              <span className={styles.readTime}>{post.readTime}</span>
              <Link href={`/blog/${post.id}`} className={styles.readMore}>
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.pagination}>
        <button className={styles.paginationButton} disabled>
          Previous
        </button>
        <span className={styles.paginationInfo}>Page 1 of 3</span>
        <button className={styles.paginationButton}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Blog;